<script>
    'use strict';
    import {
        onMount,
        onDestroy
    } from 'svelte';
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

    let time = 0,
        muted = false,
        volume = 1,
        currentVolume,
        volumeSlider,
        ended,
        slider,
        duration,
        audio,
        audioContext,
        sourceNode,
        isPause,
        startTime,
        convolverNode,
        volumeNode,
        lowShelf,
        buffer,
        seekTime,
        playModeIcon = 'repeat',
        onended;

    onMount(() => {
        'use strict';
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();

        convolverNode = audioContext.createConvolver();
        volumeNode = audioContext.createGain();
        const gainDryNode = audioContext.createGain();
        const gainWetNode = audioContext.createGain();
        gainDryNode.connect(volumeNode);
        gainWetNode.connect(volumeNode);
        volumeNode.connect(audioContext.destination);
        convolverNode.connect(gainWetNode);
        const iOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform.indexOf('Mac') !== -1 && "ontouchend" in document);
        const safariMac = navigator.platform.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Safari') !== -1;
        if (iOS || safariMac) {
            gainDryNode.gain.value = 0.8125;
            gainWetNode.gain.value = 0.3125;
        } else {
            gainDryNode.gain.value = 0.8125;
            gainWetNode.gain.value = 0.3125;
        }
        fetch("6 Spaces 09 Arena Quad.wav").then(function (response) {
            'use strict';
            response.arrayBuffer().then(function (ab) {
                'use strict';
                try {
                    audioContext.decodeAudioData(ab).then(function (data) {
                        'use strict';
                        convolverNode.buffer = data;
                    });
                } catch (error) {
                    audioContext.decodeAudioData(ab, function (data) {
                        'use strict';
                        convolverNode.buffer = data;
                    });
                }
            });
        });

        lowShelf = audioContext.createBiquadFilter();
        lowShelf.type = "lowshelf";
        lowShelf.frequency.value = 121.43;
        lowShelf.gain.value = 3.97941;

        lowShelf.connect(gainDryNode);

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
    
    onended = async() => {
        isPlay.set(false);
        time = 0;
        duration = 0;
        let lastSong = songs.length - 1;
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
            playAudio();
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
            playAudio();
        } else {
        	playAudio();
        }
    };

    const playAudio = (toPause) => {
    	'use strict';
        if ($source) {
            //audio.paused ? audio.play() : audio.pause();
            //audio.paused ? isPlay.set(false) : isPlay.set(true);
            const u = 'https://cdn.bytwm2hc.xyz/01. ハッピーシンセサイザ.wv?raw';
            if (audioContext.state === "suspended" || audioContext.state === "interrupted") {
                audioContext.resume();
            }

            // Detect if we're in playing and need a pause
            if (sourceNode) {
                if (toPause) {
                    seekTime = audioContext.currentTime - startTime;
                }
                sourceNode.onended = null;
                sourceNode.stop();
                sourceNode = false;
                if (toPause) {
                    isPause = true;
                    isPlay.set(false);
                    return;
                }
            }
            sourceNode = audioContext.createBufferSource();

            // Resume playing
            if (isPause) {
                sourceNode.buffer = buffer;
                sourceNode.connect(convolverNode);
                sourceNode.connect(lowShelf);
                try {
                    if (sourceNode.start) {
                        sourceNode.start(0, seekTime);
                    } else if (sourceNode.noteOn) {
                        sourceNode.noteOn(0, seekTime);
                    }
                    startTime = audioContext.currentTime - seekTime;
                    updateTime(false);
                    isPause = false;
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
            isCAFSupported ? (fileFormat = '.caf?proxied') : (isOGGSupported ? (fileFormat = '.opus?raw&proxied') : true);
            fetch(u).then(function (response) {
                'use strict';
                response.arrayBuffer().then(function (arrayBuffer) {
                    'use strict';
                    try {
                        audioContext.decodeAudioData(arrayBuffer).then(function (audioData) {
                            'use strict';
                            sourceNode.connect(convolverNode);
                            sourceNode.connect(lowShelf);
                            sourceNode.onended = onended;

                            try {
                                sourceNode.buffer = audioData;
                                buffer = audioData;
                                duration = sourceNode.buffer.duration;
                            } catch (ignored) {}
                            try {
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
                            } catch (error) {
                                return;
                            }
                        }, async function (error) {
                        var array = new Uint8Array(arrayBuffer);

                        let filename = "input.wv";
                        let stream = FS.open(filename, "w+");
                        FS.write(stream, array, 0, array.length, 0);
                        FS.close(stream);

                        playbackStatus = 0;
                        decodedsamples = 0;

                        const bytes_per_element = Module.HEAP32.BYTES_PER_ELEMENT;

                        if (typeof arrayPointer == "undefined") {
                            arrayPointer = Module._malloc(4096 * bytes_per_element);
                        }

                        let musicdata = new Int32Array(4096).fill(0);
                        Module.HEAP32.set(musicdata, arrayPointer / bytes_per_element);

                        // lets initialise the WavPack file so we know its sample rate,
                        // number of channels, bytes per sample etc.

                        Module.ccall("initialiseWavPack", null, ["string"], [filename]);

                        sample_rate = Module.ccall("GetSampleRate", null, [], []);
                        // sample_rate = 44100;
                        window.console.log("sample_rate is ", sample_rate);

                        numChannels = Module.ccall("GetNumChannels", null, [], []);
                        window.console.log("(reduced) number of channels is ", numChannels);

                        var totalNumSamples = Module.ccall("GetNumSamples", null, [], []);
                        window.console.log("Number of samples is ", totalNumSamples);

                        min_sample_size = min_sample_duration * sample_rate;

                        bps = Module.ccall("GetBytesPerSample", null, [], []);
                        window.console.log("bytes per sample is ", bps);

                        floatDivisor = Math.pow(2, bps * 8 - 1);

                        context = new AudioContext({
                            latencyHint: "interactive",
                            sampleRate: sample_rate,
                        });
                        context.resume();

                        // oninput = handleVolumeEvents;
                        // var aw = await context.audioWorklet.addModule("./messenger-processor.js");

                        await fetch("messenger-processor.js").then((response) => response.text()).then((text) => {
                            'use strict';
                            const blob = new Blob([text], { type: 'application/javascript; charset=utf-8' });
                            const objectUrl = URL.createObjectURL(blob);

                            
                            return context.audioWorklet.addModule(objectUrl).finally(() => URL.revokeObjectURL(objectUrl));
                        });

                        var awopt = { outputChannelCount: [numChannels] }; // so we can get stereo output, this is our AudioWorkletNodeOptions
                        messengerWorkletNode = new MessengerWorkletNode(context, awopt);
                        messengerWorkletNode.connect(context.destination);
                    });
                    } catch (ignored) {}
                });
            });
        } else {
            showError();
        }
    };

    const seek = () => {
    	'use strict';
    	sourceNode.onended = null;
        sourceNode.stop();
        sourceNode = audioContext.createBufferSource();
        sourceNode.buffer = buffer;
        sourceNode.connect(convolverNode);
        sourceNode.connect(lowShelf);
        sourceNode.onended = onended;
        try {
            if (sourceNode.start) {
                sourceNode.start(0, slider.value);
                startTime = audioContext.currentTime - slider.value;
                updateTime(false);
            } else if (sourceNode.noteOn) {
                sourceNode.noteOn(0, slider.value);
                startTime = audioContext.currentTime - slider.value;
                updateTime(false);
            }
        } catch (error) {
            return;
        }
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

    const changeSong = async ({
        song
    }, i) => {
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
        if ($source) {
            index.set($index - 1);
            if ($index < 0) {
                index.set(lastSong);
            }
            onEndedSong($index, audio);
        } else {
            showError();
        }
    };

    const nextSong = () => {
        if ($source) {
            index.set($index + 1);
            if ($index > lastSong) {
                index.set(0);
            }
            onEndedSong($index, audio);
        } else {
            showError();
        }
    };

    const changeMode = () => {
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

    const updateTime = (isBeaconing) => {
        'use strict';
        if (isBeaconing) {
            return;
        }
        if (!sourceNode || sourceNode.buffer === null) {
            return;
        }
        if (audioContext.currentTime - startTime <= sourceNode.buffer.duration) {
            time = audioContext.currentTime - startTime;
            // next run
            setTimeout(updateTime.bind(null, false), 100);
        }
    };

    let isLyricsPanel = false;
</script>

<svelte:head>
    <title>{$source ? `${$title} - ${$artist} | Muzyka` : 'Muzyka'}</title>
</svelte:head>

<div class="container">
    <div class="card">
        <h1 class="card__title">{$title}</h1>
        <p class="card__artist">{$artist}</p>
        <img class="card__album" draggable="false" src="/img/{$albumCover}" alt={$album} />
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
			<button type="button" on:click={() => playAudio(true)} class="play"><i class="fas fa-fw fa-{!$isPlay || ended ? 'play' : 'pause'}" /></button>
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
		<p class="card__copyright">&copy; 2022 by <a href="https://m-adithya.my.id" target="_blank">Mohamad Adithya</a></p>
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
<audio
	bind:this={audio}
	muted
	on:loadeddata={() => isLoaded.set(true)}
/>

<style>
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
			width: 70%;
		}
	}
</style>