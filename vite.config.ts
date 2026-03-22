import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

export default defineConfig({
	plugins: [sveltekit(), crossOriginIsolation(), viteStaticCopy({
      targets: [
        {
          src: '_headers',
          dest: ''
        }
      ]
    })],
	server: {
        host: '0.0.0.0'
    }
});
