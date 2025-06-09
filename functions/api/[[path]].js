export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const apiUrl = `http://rwaform.dappweb.cn${url.pathname}`;

  return fetch(apiUrl, {
    headers: request.headers,
    method: request.method,
    body: request.body,
  });
}
