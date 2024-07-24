"use strict";
importScripts("wavpack.js");
const min_sample_duration = 2; // sec
let fetching_interval; // ms (Immediately if available, default: 5)
let sample_rate = 44100;
let numChannels = 1;
let bps = 2;
let arrayPointer;
let min_sample_size = 100;
let floatDivisor = 1.0;
let fetched_data_left = new Float32Array(0);
let fetched_data_right = new Float32Array(0);
let end_of_song_reached = false;
let is_reading = false;
let pcm_buffer_in_use = false;
let filename = "wavpack.wv";

const play = async function (wvData) {
    "use strict";
    end_of_song_reached = false;
    is_reading = false;
    fetched_data_left = new Float32Array(0);
    fetched_data_right = new Float32Array(0);
    const bytes_per_element = Module.HEAP32.BYTES_PER_ELEMENT;
    let data, stream;
    data = new Uint8Array(wvData);
    stream = FS.open(filename, "w+");
    FS.write(stream, data, 0, data.length, 0);
    FS.close(stream);
    postMessage({
        wvData: wvData
    }, [wvData]);
    wvData = undefined;
    data = undefined;

    if (typeof arrayPointer === "undefined") {
        arrayPointer = Module._malloc(4096 * bytes_per_element);
    }

    let musicdata = new Int32Array(4096).fill(0);
    Module.HEAP32.set(musicdata, arrayPointer / bytes_per_element);

    // lets initialise the WavPack file so we know its sample rate, number of channels, bytes per sample etc.
    Module.ccall("initialiseWavPack", null, ["string"], [filename]);

    sample_rate = Module.ccall("GetSampleRate", null, [], []);
    //console.log("Sample rate is ", sample_rate);
    if (sample_rate <= 48000) {
        fetching_interval = 10;
    }
    if (sample_rate >= 96000) {
        fetching_interval = 8;
    }
    postMessage({
        sampleRate: sample_rate
    });

    postMessage({
        numSamples: Module.ccall("GetNumSamples", null, [], [])
    });

    numChannels = Module.ccall("GetNumChannels", null, [], []);
    //console.log("(Reduced) number of channels is ", numChannels);

    min_sample_size = min_sample_duration * sample_rate;

    bps = Module.ccall("GetBytesPerSample", null, [], []);
    //console.log("Bytes per sample is ", bps);

    floatDivisor = Math.pow(2, bps * 8 - 1);

    periodicFetch();
};

const periodicFetch = async function () {
    "use strict";
    if (!end_of_song_reached && typeof fetched_data_left !== 'undefined' && sample_rate <= 48000 && fetched_data_left.length >= min_sample_size * 20) {
        setTimeout(periodicFetch, fetching_interval * 2);
        return;
    }
    if (!end_of_song_reached && typeof fetched_data_left !== 'undefined' && sample_rate >= 96000 && fetched_data_left.length >= min_sample_size * 10) {
        setTimeout(periodicFetch, fetching_interval * 3);
        return;
    }
    if (!end_of_song_reached && typeof fetched_data_left !== 'undefined' && sample_rate <= 192000 && fetched_data_left.length >= min_sample_size * 5) {
        setTimeout(periodicFetch, fetching_interval * 4);
        return;
    }

    let decodedamount = Module.ccall("DecodeWavPackBlock", "number", ["number", "number", "number"], [2, 2, arrayPointer]);

    if (pcm_buffer_in_use) {
        // wait - this shouldn't be called but have as a sanity check, if we are currently adding PCM (decoded) music data to the AudioBuffer context we don't want to overwrite it
        console.log("~");

        setTimeout(periodicFetch, 1);
        return;
    }

    pcm_buffer_in_use = true;

    if (decodedamount != 0) {
        let output_array = new Int32Array(Module.HEAP32.buffer, arrayPointer, 4096);

        let floatsLeft = new Float32Array(1024);
        let floatsRight = new Float32Array(1024);

        if (numChannels == 2) {
            for (let i = 2047; i >= 0; i--) {
                if (i % 2 == 0) {
                    floatsLeft[i / 2] = output_array[i] / floatDivisor;
                } else {
                    floatsRight[(i - 1) / 2] = output_array[i] / floatDivisor;
                }
            }
        } else {
            // mono music (1 channel)
            for (let i = 1023; i >= 0; i--) {
                floatsLeft[i] = output_array[i] / floatDivisor;
            }
        }

        fetched_data_left = concatFloat32Arrays(fetched_data_left, floatsLeft);
        if (numChannels == 2) {
            fetched_data_right = concatFloat32Arrays(fetched_data_right, floatsRight);
        }
    } else {
        // we decoded zero bytes, so end of song reached
        // we fill our decoded music buffer (PCM) with zeroes (silence)
        end_of_song_reached = true;
        let buffergap = min_sample_size - fetched_data_left.length;
        let emptyArray = new Float32Array();

        for (let i = 0; i < buffergap; i++) {
            emptyArray[i] = 0.0;
        }

        fetched_data_left = concatFloat32Arrays(fetched_data_left, emptyArray);
        if (numChannels == 2) {
            fetched_data_right = concatFloat32Arrays(fetched_data_right, emptyArray);
        }
    }

    pcm_buffer_in_use = false;

    if (!end_of_song_reached) {
        // lets load more data (decode more audio from the WavPack file)
        setTimeout(periodicFetch, fetching_interval);
    }

    // if we are not actively reading and have fetched enough
    if (!is_reading && fetched_data_left.length >= min_sample_size) {
        readingLoop(); // start reading
    }

    // Start playing when decoded all but wait very long time...
    //if (end_of_song_reached) {
    //    console.log(buffer.duration);
    //    try {
    //        "use strict";
    //        sourceNode.buffer = buffer;
    //        duration = sourceNode.buffer.duration;

    //        if (sourceNode.start) {
    //            sourceNode.start(0);
    //            startTime = audioContext.currentTime;
    //            updateTime(false);
    //        } else if (sourceNode.noteOn) {
    //            sourceNode.noteOn(0);
    //            startTime = audioContext.currentTime;
    //            updateTime(false);
    //            isPlay.set(true);
    //        }
    //    }
    //    catch (ignored) {}
    //}
};

const readingLoop = function () {
    "use strict";
    if (fetched_data_left.length < min_sample_size) {
        is_reading = false;
        if (end_of_song_reached) {
            is_reading = false;
            postMessage("readingLoop: end_of_song_reached");
        }
        return;
    }

    addBufferToAudioContext();
};

const addBufferToAudioContext = async function () {
    "use strict";
    // let the world know we are actively reading
    is_reading = true;

    while (pcm_buffer_in_use) {
        // wait, this shouldn't be called, but if we're adding more data to the PCM buffer, don't want to overwrite it
        //console.log("-");

        //setTimeout(addBufferToAudioContext, fetching_interval * 2);
        //return;
    }

    pcm_buffer_in_use = true;

    // create a new AudioBuffer
    //const aud_buf = new AudioContext().createBuffer(numChannels, fetched_data_left.length, sample_rate);
    // copy our fetched data to its first channel
    //aud_buf.copyToChannel(fetched_data_left, 0);
    //if (numChannels == 2) {
    //    aud_buf.copyToChannel(fetched_data_right, 1);
    //}

    postMessage({
        L: fetched_data_left,
        R: fetched_data_right
    }, [fetched_data_left.buffer, fetched_data_right.buffer]);
    fetched_data_left = undefined;
    fetched_data_right = undefined;

    // Append decoded audio buffer/data for all
    //if (buffer === null) {
    //    buffer = aud_buf;
    //} else {
    //    buffer = appendBuffer(buffer, aud_buf);
    //}

    pcm_buffer_in_use = false;
    //setTimeout(readingLoop, 0);
    if (end_of_song_reached) {
        postMessage("addBufferToAudioContext: end_of_song_reached");
    }
};

const concatFloat32Arrays = function (arr1, arr2) {
    "use strict";
    if (!arr1 || !arr1.length) {
        return arr2 && arr2.slice();
    }
    if (!arr2 || !arr2.length) {
        return arr1 && arr1.slice();
    }
    let out = new Float32Array(arr1.length + arr2.length);
    out.set(arr1);
    out.set(arr2, arr1.length);
    arr1 = undefined;
    arr2 = undefined;
    return out;
};

self.onmessage = function (event) {
    "use strict";
    if (event.data === "onended") {
        readingLoop();
        return;
    }

    if (event.data === "BYTES_PER_ELEMENT") {
        try {
            "use strict";
            postMessage({BYTES_PER_ELEMENT: Module.HEAP32.BYTES_PER_ELEMENT});
        }
        catch (e) {
            "use strict";
            postMessage({BYTES_PER_ELEMENT: 0});
        }
        return;
    }

    if (event.data === "free") {
        if (arrayPointer) {
            Module.ccall('finaliseWavPack', null, ['string'], [filename]);
            Module._free(Module.HEAP32.buffer);
            //Module._free(arrayPointer);
            //arrayPointer = undefined;
        }
        return;
    }

    play(event.data);
};