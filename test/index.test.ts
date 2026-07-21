import { describe, expect, test } from 'bun:test';
import { greet } from '../src';

describe('greet', () => {
  test('greets the world by default', () => {
    expect(greet()).toBe('Hello, world!');
  });

  test('greets a supplied name', () => {
    expect(greet('Cloudflare')).toBe('Hello, Cloudflare!');
  });
});
