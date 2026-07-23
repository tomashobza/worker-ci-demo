import { describe, expect, test } from 'vitest';
import { handleRequest } from '../src';

describe('handleRequest', () => {
  test('greets the world by default', async () => {
    const response = handleRequest(new Request('https://example.com'));

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('text/plain; charset=utf-8');
    await expect(response.text()).resolves.toBe('Hello, world!');
  });

  test('greets the requested name', async () => {
    const response = handleRequest(new Request('https://example.com?name=Cloudflare'));

    await expect(response.text()).resolves.toBe('Hello, Cloudflare!');
  });
});
