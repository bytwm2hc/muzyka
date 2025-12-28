<script>
    'use strict';
    import {
        onMount,
        onDestroy
    } from 'svelte';
    import { toBlobURL } from '@ffmpeg/util';
    import {
        formatDuration
    } from '../helpers/format.js';
    import {
        source,
        title,
        isPlay,
        artist,
        albumCover,
        album,
        isLoaded,
        btnDisabled,
        index,
        playMode,
        lyrics
    } from '../stores/song';
    import SongBar from '../components/SongBar.svelte';
    import {
        songs
    } from '../data/songs';
    import {
        onEndedSong,
        PLAY_MODE,
        showError
    } from '../helpers/song';
    import { FFmpeg } from '../ffmpeg';

    let params,
        audio, // bind <audio> element
        time = 0, // song played time
        slider, // bind song seek time UI <input type="range"> element
        duration,
        paused = false, 
        ended,
        muted = false,
        volume = 1,
        currentVolume,
        volumeSlider, // bind volume control UI <input type="range"> element
        audioContext,
        convolverNode,
        gainDryNode,
        gainWetNode,
        volumeNode,
        //highShelf,
        panNode,
        sourceNode,
        buffer,
        startTime,
        seekTime,
        playModeIcon = 'repeat',
        isLyricsPanel = false;
    let bsn,
        sr,
        //wavpackWrapper,
        worker;

    onMount(() => {
        'use strict';
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        
        if (iOS()) {
            document.getElementById('overlay').addEventListener('click', async function () {
                document.getElementById('overlay').style.display = 'none';
                await audio.play();
                audioContext = new AudioContext({latencyHint: 'playback'});
                audioContext.onstatechange = async () => {
                    'use strict';
                     if (audioContext.state !== "running") {
                         await audioContext.resume();
                    }
                };

                convolverNode = audioContext.createConvolver();
                gainDryNode = audioContext.createGain();
                gainWetNode = audioContext.createGain();
                volumeNode = audioContext.createGain();
                gainDryNode.connect(volumeNode);
                gainWetNode.connect(volumeNode);
                volumeNode.connect(audioContext.destination);
                convolverNode.connect(gainWetNode);
                // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
                if (params.pan !== null) {
                    panNode = audioContext.createStereoPanner();
                    panNode.pan.setValueAtTime(Number(params.pan), audioContext.currentTime);
                    panNode.connect(convolverNode);
                    //panNode.connect(highShelf);
                    panNode.connect(gainDryNode);
                }

                fetch('//terabox-app-3685270.pages.dev/api?proxy&data=https://www.1024tera.com/s/1Zl-qujHyk-NY6WI-m4Onzw').then(function (response) {
                    'use strict';
                    response.arrayBuffer().then(function (ab) {
                        'use strict';
                        try {
                            'use strict';
                            audioContext.decodeAudioData(ab).then(function (data) {
                                'use strict';
                                convolverNode.buffer = data;
                            });
                        } catch (error) {
                            'use strict';
                            audioContext.decodeAudioData(ab, function (data) {
                                'use strict';
                                convolverNode.buffer = data;
                            });
                        }
                    });
                });

                //highShelf = audioContext.createBiquadFilter();
                //highShelf.type = 'highshelf';
                //highShelf.frequency.value = 16000;
                //highShelf.gain.value = 3;
                //highShelf.connect(gainDryNode);
            });
        } else {
            document.getElementById('overlay').style.display = 'none';
            audioContext = new AudioContext({latencyHint: 'playback'});
            audioContext.onstatechange = async () => {
                'use strict';
                if (audioContext.state !== "running") {
                    await audioContext.resume();
                }
            };
            
            convolverNode = audioContext.createConvolver();
            gainDryNode = audioContext.createGain();
            gainWetNode = audioContext.createGain();
            volumeNode = audioContext.createGain();
            gainDryNode.connect(volumeNode);
            gainWetNode.connect(volumeNode);
            volumeNode.connect(audioContext.destination);
            convolverNode.connect(gainWetNode);
            // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
            if (params.pan !== null) {
                panNode = audioContext.createStereoPanner();
                panNode.pan.setValueAtTime(Number(params.pan), audioContext.currentTime);
                panNode.connect(convolverNode);
                //panNode.connect(highShelf);
                panNode.connect(gainDryNode);
            }

            fetch('https://terabox-app-3685270.pages.dev/api?proxy&data=https://www.1024tera.com/s/1Zl-qujHyk-NY6WI-m4Onzw').then(function (response) {
                'use strict';
                response.arrayBuffer().then(function (ab) {
                    'use strict';
                    try {
                        'use strict';
                        audioContext.decodeAudioData(ab).then(function (data) {
                            'use strict';
                            convolverNode.buffer = data;
                        });
                    } catch (error) {
                        'use strict';
                        audioContext.decodeAudioData(ab, function (data) {
                            'use strict';
                            convolverNode.buffer = data;
                        });
                    }
                });
            });

            //highShelf = audioContext.createBiquadFilter();
            //highShelf.type = 'highshelf';
            //highShelf.frequency.value = 16000;
            //highShelf.gain.value = 3;
            //highShelf.connect(gainDryNode);
        }
        // Convolver Off
        if (params.off !== null) {
            convolverNode.buffer = null;
        }

        //wavpackWrapper = document.getElementById('wavpackWrapper');
        /* window.addEventListener('message', async (event) => {
            //if (event.data === null || !event.data.L) {
            //    console.log(event.data);
            //}
            if (event.data === null) {
                if (bsn) {
                    bsn.onended = onended;
                }
                else {
                    onended();
                }
                return;
            }
            if (typeof event.data.L !== 'undefined') {
                bsn = audioContext.createBufferSource();
                let aud_buf = audioContext.createBuffer(2, event.data.L.length, sr);
                aud_buf.copyToChannel(event.data.L, 0);
                event.data.L = undefined;
                aud_buf.copyToChannel(event.data.R, 1);
                event.data.R = undefined;
                if (panNode === undefined) {
                    bsn.connect(convolverNode);
                    //bsn.connect(highShelf);
                    bsn.connect(gainDryNode);
                } else {
                    bsn.connect(panNode);
                }
                //console.log(aud_buf);
                bsn.onended = function () {
                    wavpackWrapper.contentWindow.postMessage('onended', '*');
                    bsn = undefined;
                };
                bsn.buffer = aud_buf;
                bsn.playbackRate.value = 432/440;
                bsn.start(0);
                return;
            }
            if (typeof event.data.sampleRate !== 'undefined') {
                sr = event.data.sampleRate;
                return;
            }
            if (typeof event.data.numSamples !== 'undefined') {
                duration = event.data.numSamples / sr * (440 / 432);
                startTime = audioContext.currentTime;
                setTimeout(updateTime.bind(null, false), 500);
                return;
            }
        }); */

        /* audio.onended = async () => {
        	isPlay.set(false);
        	time = 0;
        	let lastSong = songs.length - 1;
        	if ($playMode === PLAY_MODE[0]) {
        		let nextSong = $index + 1;
        		index.set(nextSong);
        		if ($index > lastSong) {
        			index.set(0);
        			onEndedSong(0, audio);
        		} else {
        			onEndedSong(nextSong, audio);
        		}
        	} else if ($playMode === PLAY_MODE[1]) {
        		const randomSong = songs[Math.floor(Math.random() * songs.length)];
        		const randomIndex = songs.indexOf(randomSong);
        		index.set(randomIndex);
        		onEndedSong($index, audio);
        	} else {
        		onEndedSong($index, audio);
        	}
        }; */
    });

    const playAudio = async (toPause) => {
    	'use strict';
        if ($source) {
            //audio.paused ? audio.play() : audio.pause();
            //audio.paused ? isPlay.set(false) : isPlay.set(true);
            $btnDisabled = '';
            ended = false;
            slider.disabled = null;

            if (iOS() && audio.paused) {
                audio.load();
                await audio.play();
            }
            
            if (audioContext.state !== 'running') {
                await audioContext.resume();
            }

            // Detect if we're in playing and need a pause
            if (sourceNode) {
                if (toPause) {
                    seekTime = audioContext.currentTime - startTime;
                }
                sourceNode.onended = null;
                try {
                    sourceNode.stop();
                }
                catch (ignored) {}
                sourceNode.disconnect();
                sourceNode.buffer = null;
                sourceNode = undefined;
                if (toPause) {
                    paused = true;
                    isPlay.set(false);
                    return;
                }
            }

            sourceNode = audioContext.createBufferSource();

            // Resume playing
            if (paused) {
                sourceNode.buffer = buffer;
                if (panNode === undefined) {
                    sourceNode.connect(convolverNode);
                    //sourceNode.connect(highShelf);
                    sourceNode.connect(gainDryNode);
                } else {
                    sourceNode.connect(panNode);
                }
                if (songs[$index].isTAK || songs[$index].isWavPack) {
                    sourceNode.playbackRate.value = 432/440;
                }
                sourceNode.onended = onended;
                try {
                    if (sourceNode.start) {
                        sourceNode.start(0, seekTime);
                    } else if (sourceNode.noteOn) {
                        sourceNode.noteOn(0, seekTime);
                    }
                    startTime = audioContext.currentTime - seekTime;
                    updateTime(false);
                    paused = false;
                    isPlay.set(true);
                } catch (error) {
                    return;
                }
                return; // End!
            }

            let fileFormat = '';
            const safariMac = navigator.platform.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Safari') !== -1;
            const isCAFSupported = new Audio().canPlayType('audio/x-caf; codecs=opus') === 'probably' || safariMac;
            const isOGGSupported = new Audio().canPlayType('audio/ogg; codecs=opus') === 'probably';
            isCAFSupported ? (fileFormat = '.caf') : (isOGGSupported ? (fileFormat = '.opus') : true);
            let url = songs[$index].filename;
            if (!songs[$index].isTeraBox) {
                songs[$index].isTAK ? (fileFormat = '.tak') : false;
                songs[$index].isWavPack ? (fileFormat = '.wv') : false;
                url = songs[$index].filename + fileFormat;
            }
            fetch(url).then(function (response) {
                'use strict';
                response.arrayBuffer().then(function (arrayBuffer) {
                    'use strict';
                    if (songs[$index].isTAK) {
                        TakPlay(arrayBuffer, fileFormat);
                        return;
                    }
                    if (songs[$index].isWavPack) {
                        //WavPackPlay(arrayBuffer);
                        TakPlay(arrayBuffer, fileFormat);
                        return;
                    }
                    try {
                        audioContext.decodeAudioData(arrayBuffer).then(function (audioData) {
                            'use strict';
                            gainDryNode.gain.value = 0.6875;
                            gainWetNode.gain.value = 1.3125;
                            if (params.off !== null) {
                                gainDryNode.gain.value = 1;
                                gainWetNode.gain.value = 0;
                            }
                            if (panNode === undefined) {
                                sourceNode.connect(convolverNode);
                                //sourceNode.connect(highShelf);
                                sourceNode.connect(gainDryNode);
                            } else {
                                sourceNode.connect(panNode);
                            }
                            sourceNode.onended = onended;

                            try {
                                sourceNode.buffer = audioData;
                                buffer = audioData;
                                duration = sourceNode.buffer.duration;

                                if (sourceNode.start) {
                                    sourceNode.start(0);
                                    startTime = audioContext.currentTime;
                                    updateTime(false);
                                    isPlay.set(true);
                                } else if (sourceNode.noteOn) {
                                    sourceNode.noteOn(0);
                                    startTime = audioContext.currentTime;
                                    updateTime(false);
                                    isPlay.set(true);
                                }
                            } catch (ignored) {}
                        });
                    } catch (error) {
                        //TODO: decodeAudioData(..., function());
                    }
                });
            });
        } else {
            showError();
        }
    }

    const onended = async() => {
        'use strict';
        //console.log('onended!');
        isPlay.set(false);
        time = 0;
        duration = 0;
        ended = true;
        paused = false;
        let lastSong = songs.length - 1;
        buffer = undefined;
        try {
            sourceNode.onended = null;
            sourceNode.stop();
            sourceNode.buffer = null;
            sourceNode.disconnect();
        }
        catch (ignored) {}
        sourceNode = undefined;
        try {
            bsn.onended = null;
            bsn.buffer = null;
            bsn.stop();
            bsn.disconnect();
        }
        catch (ignored) {}
        bsn = undefined;
        if (typeof worker !== 'undefined') {
            worker.postMessage('free');
        }
        //wavpackWrapper.src = 'about:blank';

        if ($playMode === PLAY_MODE[0]) {
        	let nextSong = $index + 1;
        	index.set(nextSong);
        	if ($index > lastSong) {
        		nextSong = 0;
    		}
    		index.set(nextSong);
    		title.set(songs[nextSong].title);
            artist.set(songs[nextSong].artist);
            album.set(songs[nextSong].album.name);
            albumCover.set(songs[nextSong].album.cover);
            lyrics.set(songs[nextSong].lyrics);
            await source.set(songs[nextSong].filename);
            playAudio(false);
    	} else if ($playMode === PLAY_MODE[1]) {
        	const randomSong = songs[Math.floor(Math.random() * songs.length)];
        	const randomIndex = songs.indexOf(randomSong);
        	index.set(randomIndex);
        	title.set(songs[randomIndex].title);
            artist.set(songs[randomIndex].artist);
            album.set(songs[randomIndex].album.name);
            albumCover.set(songs[randomIndex].album.cover);
            lyrics.set(songs[randomIndex].lyrics);
            await source.set(songs[randomIndex].filename);
            playAudio(false);
        } else {
        	playAudio(false);
        }
    };

    const seek = () => {
    	'use strict';
        try {
            sourceNode.onended = null;
            sourceNode.stop();
            sourceNode = audioContext.createBufferSource();
            sourceNode.buffer = buffer;
            if (panNode === undefined) {
                sourceNode.connect(convolverNode);
                //sourceNode.connect(highShelf);
                sourceNode.connect(gainDryNode);
            } else {
                sourceNode.connect(panNode);
            }
            if (songs[$index].isTAK || songs[$index].isWavPack) {
                sourceNode.playbackRate.value = 432/440;
            }
            sourceNode.onended = onended;
            if (sourceNode.start) {
                sourceNode.start(0, slider.value);
                startTime = audioContext.currentTime - slider.value;
                updateTime(false);
            } else if (sourceNode.noteOn) {
                sourceNode.noteOn(0, slider.value);
                startTime = audioContext.currentTime - slider.value;
                updateTime(false);
            }
        } catch (ignored) {}
    };

    const seekVolume = () => (volumeNode.gain.value = volumeSlider.value);
    const muteVolume = () => {
    	'use strict';
        muted = !muted;
        if (muted) {
            currentVolume = volumeSlider.value;
            volumeNode.gain.value = 0;
            volumeSlider.value = 0;
        } else {
            volumeSlider.value = currentVolume;
            volumeNode.gain.value = currentVolume;
        }
    };

    const changeSong = async ({song}, i) => {
        $btnDisabled = '';
        paused = false;
        if (song.title == $title) {
            index.set(i);
            title.set(song.title);
            artist.set(song.artist);
            album.set(song.album.name);
            albumCover.set(song.album.cover);
            lyrics.set(song.lyrics);
            await source.set(song.filename);
            playAudio(true);
        } else {
            buffer = undefined;
            try {
                sourceNode.onended = null;
                sourceNode.buffer = null;
                sourceNode.stop();
                sourceNode.disconnect();
            }
            catch (ignored) {}
            sourceNode = undefined;
            try {
                bsn.onended = null;
                bsn.buffer = null;
                bsn.stop();
                bsn.disconnect();
            }
            catch (ignored) {}
            bsn = undefined;
            if (typeof worker !== 'undefined') {
                worker.postMessage('free');
            }
            //wavpackWrapper.src = 'about:blank';

            index.set(i);
            title.set(song.title);
            artist.set(song.artist);
            album.set(song.album.name);
            albumCover.set(song.album.cover);
            lyrics.set(song.lyrics);
            await source.set(song.filename);
            playAudio(false);
        }
    };

    const lastSong = songs.length - 1;

    const prevSong = () => {
        'use strict';
        if ($source) {
            index.set($index - 2);
            if ($index < -1) {
                index.set(lastSong - 1);
            }
            onended();
        } else {
            showError();
        }
    };

    const nextSong = () => {
        'use strict';
        if ($source) {
            //index.set($index + 1);
            //if ($index > lastSong) {
            //    index.set(0);
            //}
            //onEndedSong($index, audio);
            onended();
        } else {
            showError();
        }
    };

    const changeMode = () => {
        'use strict';
        if ($playMode === PLAY_MODE[0]) {
            playMode.set(PLAY_MODE[1]);
            playModeIcon = 'random';
        } else if ($playMode === PLAY_MODE[1]) {
            playMode.set(PLAY_MODE[2]);
            playModeIcon = 'repeat-1';
        } else {
            playMode.set(PLAY_MODE[0]);
            playModeIcon = 'repeat';
        }
    };

    const updateTime = async (isBeaconing) => {
        'use strict';
        if (isBeaconing) {
            return;
        }
        if (!sourceNode || sourceNode.buffer === null) {
            return;
        }
        //if (audioContext.currentTime - startTime <= sourceNode.buffer.duration) {
        if (audioContext.currentTime - startTime <= duration) {
            time = audioContext.currentTime - startTime;
            // next run
            setTimeout(updateTime.bind(null, false), 500);
        }
    };

    const TakPlay = async (takData, fileFormat) => {
        'use strict';
        const ffmpeg = new FFmpeg();
        let message;
		/* ffmpeg.on('log', ({ message: msg }) => {
			message = msg;
			console.log(message);
		}); */
		if (params.threading == '0') {
            await ffmpeg.load({
			    coreURL: await toBlobURL('/core/dist/esm/ffmpeg-core.js', 'application/javascript'),
		    	wasmURL: await toBlobURL('/core/dist/esm/ffmpeg-core.wasm', 'application/wasm')
		    });
        } else {
		    await ffmpeg.load({
			    coreURL: await toBlobURL('/core-mt/dist/esm/ffmpeg-core.js', 'application/javascript'),
		    	wasmURL: await toBlobURL('/core-mt/dist/esm/ffmpeg-core.wasm', 'application/wasm'),
		    	workerURL: await toBlobURL('/core-mt/dist/esm/ffmpeg-core.worker.js', 'application/javascript')
		    });
		}
		await ffmpeg.writeFile('input' + fileFormat, new Uint8Array(takData));
		await ffmpeg.ffprobe(['-v', 'quiet', '-show_entries', 'stream=sample_fmt,bits_per_raw_sample', 'input' + fileFormat, '-o', 'output.txt']);
		let data = new TextDecoder().decode(await ffmpeg.readFile('output.txt'));
		let fmt = 'pcm_f32le';
		if (data.indexOf('u8') > -1 || data.indexOf('bits_per_raw_sample=8') > -1) {
		    fmt = 'pcm_u8';
		} else
		if (data.indexOf('s16') > -1 || data.indexOf('bits_per_raw_sample=16') > -1) {
		    fmt = 'pcm_s16le';
		} else
		if (data.indexOf('s24') > -1 || data.indexOf('bits_per_raw_sample=24') > -1) {
		    fmt = 'pcm_s24le';
		}  else
		if (data.indexOf('s32') > -1 && data.indexOf('bits_per_raw_sample=32') > -1) {
		    fmt = 'pcm_s32le';
		} else
		if (data.indexOf('flt') > -1 && data.indexOf('bits_per_raw_sample=32') > -1) {
		    fmt = 'pcm_f32le';
		} else
		if (data.indexOf('dbl') > -1) {
		    fmt = 'pcm_f64le';
		} else
		if (data.indexOf('s64') > -1) {
		    fmt = 'pcm_s64le';
		}
		//console.log(data);
		//console.log(fmt);
		await ffmpeg.exec(['-i', 'input' + fileFormat, '-c:a', fmt, 'output.wav']);
		data = await ffmpeg.readFile('output.wav');
		ffmpeg.terminate();
        audioContext.decodeAudioData(data.buffer, function (buffer2) {
            if (panNode === undefined) {
                sourceNode.connect(convolverNode);
                //sourceNode.connect(highShelf);
                sourceNode.connect(gainDryNode);
            } else {
                sourceNode.connect(panNode);
            }
            gainDryNode.gain.value = 0.5;
            gainWetNode.gain.value = 1.125;
            if (params.off !== null) {
                gainDryNode.gain.value = 0.875;
                gainWetNode.gain.value = 0;
            }
            sourceNode.playbackRate.value = 432/440;
            sourceNode.onended = onended;

            try {
                sourceNode.buffer = buffer2;
                buffer = buffer2;
                duration = sourceNode.buffer.duration;

                if (sourceNode.start) {
                    sourceNode.start(0);
                    startTime = audioContext.currentTime;
                    updateTime(false);
                    isPlay.set(true);
                } else if (sourceNode.noteOn) {
                    sourceNode.noteOn(0);
                    startTime = audioContext.currentTime;
                    updateTime(false);
                    isPlay.set(true);
                }
            } catch (ignored) {}
        });
    }

    const WavPackPlay = async (wvData) => {
        'use strict';
        //audioContext.audioWorklet.addModule('bypass-processor.js').then(function () {
        //    bypasser = new AudioWorkletNode(audioContext, 'bypass-processor', {outputChannelCount: [2]});
        //    bypasser.connect(audioContext.destination);
        //});

        //if (iOS()) {
        //    wavpackWrapper.contentWindow.postMessage({wvData: wvData}, '*', [wvData]);
        //} else {
            if (typeof worker === 'undefined') {
                    worker = new Worker('/wavpack-worker.js');
                    worker.onerror = function (e) {
                        worker = new Worker('/src/wavpack-worker.js');
                        worker.onmessage = function (event) {
                'use strict';
                if (typeof event.data.L !== 'undefined') {
                    bsn = audioContext.createBufferSource();
                    let aud_buf = audioContext.createBuffer(2, event.data.L.length, sr);
                    aud_buf.copyToChannel(event.data.L, 0);
                    event.data.L = undefined;
                    aud_buf.copyToChannel(event.data.R, 1);
                    event.data.R = undefined;
                    if (panNode === undefined) {
                        bsn.connect(convolverNode);
                        //bsn.connect(highShelf);
                        bsn.connect(gainDryNode);
                    } else {
                        bsn.connect(panNode);
                    }
                    bsn.onended = function () {
                        worker.postMessage("onended");
                    };
                    bsn.buffer = aud_buf;
                    bsn.playbackRate.value = 432/440;
                    bsn.start(0);
                }
                if (event.data === "addBufferToAudioContext: end_of_song_reached") {
                    //console.log("worker: addBufferToAudioContext: end_of_song_reached");
                    bsn.onended = onended;
                    return;
                }
                if (event.data === "readingLoop: end_of_song_reached") {
                    //console.log("worker: readingLoop: end_of_song_reached");
                    onended();
                    return;
                }
                if (typeof event.data.BYTES_PER_ELEMENT !== 'undefined') {
                    if (event.data.BYTES_PER_ELEMENT > 0) {
                        worker.postMessage(wvData, [wvData]);
                    } else {
                        setTimeout(function () {
                            'use strict';
                            worker.postMessage('BYTES_PER_ELEMENT');
                        }, 1);
                    }
                    return;
                }
                if (typeof event.data.sampleRate !== 'undefined') {
                    sr = event.data.sampleRate;
                    return;
                }
                if (typeof event.data.numSamples !== 'undefined') {
                    duration = event.data.numSamples / sr * (440 / 432);
                    startTime = audioContext.currentTime;
                    setTimeout(updateTime.bind(null, false), 500);
                    return;
                }
                if (typeof event.data.wvData !== 'undefined') {
                    event.data.wvData = undefined;
                    return;
                }
            };
            setTimeout(function () {
                'use strict';
                worker.postMessage('BYTES_PER_ELEMENT');
            }, 0);

                    };
            }
            worker.onmessage = function (event) {
                'use strict';
                if (typeof event.data.L !== 'undefined') {
                    bsn = audioContext.createBufferSource();
                    let aud_buf = audioContext.createBuffer(2, event.data.L.length, sr);
                    aud_buf.copyToChannel(event.data.L, 0);
                    event.data.L = undefined;
                    aud_buf.copyToChannel(event.data.R, 1);
                    event.data.R = undefined;
                    if (panNode === undefined) {
                        bsn.connect(convolverNode);
                        //bsn.connect(highShelf);
                        bsn.connect(gainDryNode);
                    } else {
                        bsn.connect(panNode);
                    }
                    bsn.onended = function () {
                        worker.postMessage("onended");
                    };
                    bsn.buffer = aud_buf;
                    bsn.playbackRate.value = 432/440;
                    bsn.start(0);
                }
                if (event.data === "addBufferToAudioContext: end_of_song_reached") {
                    //console.log("worker: addBufferToAudioContext: end_of_song_reached");
                    bsn.onended = onended;
                    return;
                }
                if (event.data === "readingLoop: end_of_song_reached") {
                    //console.log("worker: readingLoop: end_of_song_reached");
                    onended();
                    return;
                }
                if (typeof event.data.BYTES_PER_ELEMENT !== 'undefined') {
                    if (event.data.BYTES_PER_ELEMENT > 0) {
                        worker.postMessage(wvData, [wvData]);
                    } else {
                        setTimeout(function () {
                            'use strict';
                            worker.postMessage('BYTES_PER_ELEMENT');
                        }, 1);
                    }
                    return;
                }
                if (typeof event.data.sampleRate !== 'undefined') {
                    sr = event.data.sampleRate;
                    return;
                }
                if (typeof event.data.numSamples !== 'undefined') {
                    duration = event.data.numSamples / sr * (440 / 432);
                    startTime = audioContext.currentTime;
                    setTimeout(updateTime.bind(null, false), 500);
                    return;
                }
                if (typeof event.data.wvData !== 'undefined') {
                    event.data.wvData = undefined;
                    return;
                }
            };
            setTimeout(function () {
                'use strict';
                worker.postMessage('BYTES_PER_ELEMENT');
            }, 0);
        //}
        gainDryNode.gain.value = 0.5;
        gainWetNode.gain.value = 1.125;
        if (params.off !== null) {
            gainDryNode.gain.value = 0.875;
            gainWetNode.gain.value = 0;
        }

        sourceNode.buffer = audioContext.createBuffer(2, 1, audioContext.sampleRate);
        isPlay.set(true);
        slider.disabled = 'disabled';
        $btnDisabled = 'disabled';
    }

    /*
     * Appends two ArrayBuffers into a new one.
     * 
     * @param {ArrayBuffer} buffer1 The first buffer.
     * @param {ArrayBuffer} buffer2 The second buffer.
    */
    /* const appendBuffer = (buffer1, buffer2) => {
        'use strict';
        const numberOfChannels = Math.min(buffer1.numberOfChannels, buffer2.numberOfChannels);
        const tmp = audioContext.createBuffer(numberOfChannels, (buffer1.length + buffer2.length), buffer1.sampleRate);
        for (let i = 0; i < numberOfChannels; ++i) {
            const channel = tmp.getChannelData(i);
            channel.set(buffer1.getChannelData(i), 0);
            channel.set(buffer2.getChannelData(i), buffer1.length);
        }
        return tmp;
    }; */

    const iOS = () => {
        'use strict';
        return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    };
</script>

<svelte:head>
    <title>{$source ? `${$title} - ${$artist} | Muzyka` : 'Muzyka'}</title>
</svelte:head>

<div id="overlay">
  <div id="text">Start</div>
</div>

<div class="container">
    <div class="card">
        <h1 class="card__title">{$title}</h1>
        <p class="card__artist">{$artist}</p>
        <img class="card__album" draggable="false" src="{$albumCover}" alt="{$album}" fetchpriority="high" crossorigin />
        <button type="button" on:click={()=> isLyricsPanel = !isLyricsPanel} class="card__lyrics-playlist-btn">See {isLyricsPanel ? 'Playlist' : 'Lyrics'}</button>
        <input type="range" on:input={seek} bind:this={slider} value={ended ? 0 : time} max={duration} class="card__slider card__slider--duration" />
        <div class="card__minutes">
            <p>{formatDuration(time)}</p>
            {#if $source}
				<button type="button" on:click={changeMode}
					><i class="far fa-fw fa-{playModeIcon}" /></button
				>
			{/if}
			<p>{formatDuration(duration)}</p>
		</div>
		<div class="card__actions">
			<button type="button" on:click={prevSong}><i class="fas fa-fw fa-backward" /></button>
			<button type="button" on:click={() => playAudio(true)} disabled={$btnDisabled} class="play"><i class="fas fa-fw fa-{!$isPlay || ended ? 'play' : 'pause'}" /></button>
			<button type="button" on:click={nextSong}><i class="fas fa-fw fa-forward" /></button>
		</div>
		<div class="card__actions--volume">
			<button type="button" on:click={muteVolume}><i class="fas fa-fw fa-volume-{muted ? 'mute' : 'up'}" /></button>
			<input
				type="range"
				class="card__slider card__slider--volume"
				min="0"
				on:input={seekVolume}
				bind:this={volumeSlider}
				value={volume}
				max="1"
				step=".001"
			/>
		</div>
		<p class="card__copyright">&copy; 2023 Original by <a href="https://m-adithya.my.id/" target="_blank">Mohamad Adithya</a></p>
	</div>
	<!-- Playlist Panel -->
	<div class="card-playlist" style="height: 556px;">
		<div class="card-playlist__header">
			{#if isLyricsPanel }
				<h1 class="lyrics">Lyrics</h1>
			{:else}
				<h1>My Playlist</h1>
				<p>{songs.length} {songs.length === 1 ? 'song' : 'songs'}</p>
			{/if}
		</div>
		<div class="card-playlist__container" style="padding-bottom: {songs.length > 5 ? '1em' : 0}; {!isLyricsPanel ? 'padding: 0 0.3em 0.9em 0.3em;' : ''}">
			{#if isLyricsPanel }
				<p>{@html $lyrics}</p>
			{:else}
				{#each songs as song, i}
					<SongBar on:click={() => changeSong({ song }, i)} {song} />
				{/each}
			{/if}
		</div>
	</div>
	<!-- End of Playlist Panel -->
</div>
<!--<audio
	bind:duration
	bind:ended
	bind:muted
	bind:currentTime={time}
	bind:this={audio}
	on:loadeddata={() => isLoaded.set(true)}
	src={$source}
/>-->
<audio bind:this={audio} on:loadeddata={() => isLoaded.set(true)} crossorigin loop>
    <source src="//terabox-app-3685270.pages.dev/api?proxy&data=https://www.1024tera.com/s/1-_v-hgSoGaO3XI_Gk10kMA" type="audio/wav" />
</audio>

<style>
    #overlay {
        position: fixed; /* Sit on top of the page content */
        display: block; /* Hidden by default */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5); /* Black background with opacity */
        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
        cursor: pointer; /* Add a pointer on hover */
    }

    #text{
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 50px;
        color: white;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
    }

	.container {
		display: block;
	}

	.card {
		display: flex;
		align-items: center;
		flex-direction: column;
		widows: 100%;
		max-height: 100%;
		padding: 1.6em 1.2em;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		background-color: white;
		border-radius: 1em;
		margin-bottom: 3em;
	}

	.card .card__album {
		margin-bottom: 1.5em;
		border-radius: 0.3em;
		width: 100%;
	}

	.card .card__lyrics-playlist-btn {
		margin-bottom: .5em;
		font-family: 'Poppins', sans-serif;
		text-transform: uppercase;
		letter-spacing: .2em;
	}

	.card .card__title {
		font-size: 1.3rem;
		font-weight: bold;
		text-align: center;
	}

	.card .card__artist {
		color: gray;
		text-align: center;
		margin-bottom: 1.3em;
	}

	.card .card__slider {
		height: 5px;
		cursor: pointer;
	}

	.card .card__slider--duration {
		width: 100%;
		margin-top: 10px;
	}

	.card .card__slider--volume {
		margin-top: 1em;
		height: 3px;
	}

	.card .card__actions--volume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2em;
	}

	.card .card__minutes {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1em;
		width: 100%;
		margin-bottom: 1em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.card .card__minutes > button {
		font-size: 1.5rem;
	}

	.card .card__actions > button {
		padding: 1em;
		border-radius: 50%;
		font-size: 1.2rem;
	}

	.card button:is(.play) {
		background: linear-gradient(145deg, #fefefe, #d5d5d5);
		box-shadow: 20px 20px 100px #a8a8a8, -20px -20px 100px #ffffff;
	}

	.card button:not(.play) {
		background: none;
	}

	.card .card__minutes > p {
		color: gray;
	}

	.card .card__copyright {
		font-size: 0.7rem;
		margin-top: 2.5em;
	}

	.card .card__copyright > a {
		color: black;
	}

	/* Playlist Panel */
	.card-playlist {
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.card-playlist::-webkit-scrollbar {
		display: none;
	}

	.card-playlist .card-playlist__header {
		position: sticky;
		top: 0;
		width: 100%;
		/* background-color: white; */
	}

	.card-playlist .card-playlist__header > h1 {
		font-weight: 600;
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
	}

	.card-playlist .card-playlist__header > h1:is(.lyrics) {
		margin-bottom: .8em;
	}

	.card-playlist .card-playlist__header > p {
		color: gray;
		margin-bottom: 1em;
	}

	@media (min-width: 768px) {
		.container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			min-height: 100vh;
			gap: 2.5em;
		}

		.card {
			margin-bottom: 0;
		}
	}

	@media (min-width: 992px) {
		.container {
			align-items: center;
		}

		.card .card__album {
			width: 80%;
		}
	}
</style>