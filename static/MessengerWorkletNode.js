const min_sample_duration = 2; // sec
let sample_rate = 44100; // Hz - may be updated once file is loaded

let min_sample_size = 100;

var numChannels = 1;

var decodedamount = 1;
let decodedsamples = 0;

let floatDivisor = 1.0;

let bps = 2;

let playbackStatus = 0; // 0 = normal play, 1 ran out of data, 2 requested to stop

const butOpenFile = document.getElementById("fileloader");
const butStop = document.getElementById("stopplay");
const playbackvolume = document.getElementById("volume");

let messengerWorkletNode;

var arrayPointer;
var context;
var volume = 1;

let fileHandle;

function handleVolumeEvents(evt) {
  const value = evt.target.value;
  volume = +value;
}

// Extends AudioWorkletNode to simplify the cross-thread message posting.
class MessengerWorkletNode extends AudioWorkletNode {
  constructor(context, awopt) {
    super(context, "messenger-processor", awopt);
    this.counter_ = 0;
    this.port.onmessage = this.handleMessage_.bind(this);
  }

  handleMessage_(event) {
    if(isNaN(volume))
    {
      volume = 1;
    }
    messengerWorkletNode.parameters.get("customVolumeAdjust").value =
      Math.pow(2, bps * 8 - 1) / volume;


    decodedamount = Module.ccall(
      "DecodeWavPackBlock",
      "number",
      ["number", "number", "number"],
      [2, 2, arrayPointer]
    );

    let output_array = new Int32Array(Module.HEAP32.buffer, arrayPointer, 4096);
    decodedsamples = decodedsamples + decodedamount;

    if (decodedamount == 0) {
      // zero out to bytes just to be sure
      for (let i = 0; i < 2048; i++) {
        output_array[i] = 1;
      } 
      playbackStatus = 1;
    }

    // if decoded amount is less than 1024 (and not zero), we fill array with silence/zero
    if (decodedamount < 1024 && decodedamount > 0) {
      for (let i = decodedamount * numChannels; i < 1024 * numChannels; i++) {
        output_array[i] = 1;
      }
      playbackStatus = 1;
    }

    // We use 2048 as we decode 1024 samples and data may be stereo i.e. 2x1024
    const segment = output_array.slice(0, 2049); // 2048 plus 1 for status
    segment[2048] = playbackStatus;

    this.port.postMessage(segment, [segment.buffer]);
  }
}