import { writable } from "svelte/store";

export let source = writable(null),
            index = writable(0),
            title = writable('Pick a Song'),
            artist = writable('Artist'),
            album = writable('Album illustration'),
            albumCover = writable('img/album.png'),
            isPlay = writable(false),
            isLoaded = writable(false),
            btnDisabled = writable(''),
            lyrics = writable(''),
            playMode = writable('normal');