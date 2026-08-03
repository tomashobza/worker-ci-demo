export function handleRequest(request: Request): Response {
  const name = new URL(request.url).searchParams.get('name') ?? 'world';

  return new Response(`Hello, ${name}!`, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}

export default {
  fetch: handleRequest,
} satisfies ExportedHandler;
