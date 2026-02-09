export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Only handle /hook path
    if (url.pathname.startsWith('/hook')) {
      // Forward to your actual aaPanel webhook
      const targetUrl = `${env.AAPANEL_URL}${url.pathname}${url.search}`;
      
      return fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });
    }
    
    return new Response('Not Found', { status: 404 });
  },
};
