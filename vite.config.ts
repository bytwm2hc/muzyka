import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

export default defineConfig({
	plugins: [sveltekit(), crossOriginIsolation()],
	server: {
        host: '0.0.0.0'
    }
});
