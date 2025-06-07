export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/')) {
      url.hostname = 'www.rwaform.dappweb.cn/api/';

      const new_request = new Request(url, request);

      return fetch(new_request);
    }

    return env.ASSETS.fetch(request);
  },
};
