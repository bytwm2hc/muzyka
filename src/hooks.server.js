/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    if (event.url.pathname == '/wavpack-worker') {
    	return event.fetch('wavpack-worker.js');
    }

    const response = await resolve(event);
    return response;
}