export default {
  async fetch(request) {
    return new Response("Hello from Cloudflare Workers!", { status: 200 });
  }
};
