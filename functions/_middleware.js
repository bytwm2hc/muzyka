export async function onRequest({ request, next }) {
  const response = await next();

  const url = new URL(request.url);

  // 只針對首頁
  if (url.pathname === '/') {
    const headers = new Headers(response.headers);

    headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
    headers.set('Referrer-Policy', 'same-origin');

    return new Response(response.body, {
      ...response,
      headers
    });
  }

  return response;
}