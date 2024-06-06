<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Audio</title>
    <link rel="stylesheet" type="text/css" 
href="https://cdn.jsdelivr.net/gh/greghub/green-audio-player/dist/css/green-audio-player.min.css">
    <script 
src="https://cdn.jsdelivr.net/gh/greghub/green-audio-player/dist/js/green-audio-player.min.js"></script>
    <style>
      html, body {
        height: 100vh;
      }

      body {
        margin: 0;
        display: flex;
        flex-direction: column;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', Arial, sans-serif;
        justify-content: center;
        align-items: center;
        background: #F8FFAE;
        background: -webkit-linear-gradient(-65deg, #43C6AC, #F8FFAE);
        background: linear-gradient(-65deg, #43C6AC, #F8FFAE);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      #overlay {
      	position: fixed; /* Sit on top of the page content */
      	display: block; /* Show by default */
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
    </style>
  </head>
  <body>
    <div class="player">
        <audio crossorigin loop>
          <source src="https://cdn.bytwm2hc.xyz/tmp/GreenAudioPlayer/output.flac?proxied&raw" type="audio/flac">
        </audio>
    </div>
    <div id="overlay">
        <div id="text">Start</div>
    </div>
    <script defer>
      'use strict';
      GreenAudioPlayer.init({selector: ".player"});

      const audio = document.querySelector("audio");
      const audioCtx = new (window.AudioContext || window.webkitAudioContext);
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'allpass';
      filter.detune.value = 432 / 440 * 100;
      filter.frequency.value = 1000;
      filter.Q.value = 0.0001;
      const source = audioCtx.createMediaElementSource(audio);

      async function createReverb() {
      	'use strict';
      	let convolver = audioCtx.createConvolver();

        // load impulse response from file
        let response = await fetch("https://cdn.bytwm2hc.xyz/tmp/GreenAudioPlayer/impulse-response.flac?proxied&raw");
        let arraybuffer = await response.arrayBuffer();
        convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

        return convolver;
      }

      createReverb().then(function (convolver) {
      	'use strict';
      	source.connect(filter);
      	//source.mediaElement.playbackRate = 432 / 440;
        filter.connect(convolver);
      	convolver.connect(audioCtx.destination);
      });

      document.getElementById('overlay').addEventListener('click', async function() {
      	await audioCtx.resume();
      	document.getElementById("overlay").style.display = "none";
      });
    </script>
  </body>
</html>