import { describe, expect, test } from 'bun:test';
import { page, renderPage } from '../src';

describe('renderPage', () => {
  test('produces a full HTML document', () => {
    const html = renderPage(page);
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain(`<title>${page.title}</title>`);
    expect(html).toContain(`<h1>${page.heading}</h1>`);
    expect(html).toContain(page.body);
  });

  test('escapes HTML in content', () => {
    const html = renderPage({
      title: 'a & b',
      heading: '<script>',
      body: '"quoted"',
    });
    expect(html).toContain('a &amp; b');
    expect(html).toContain('&lt;script&gt;');
    expect(html).toContain('&quot;quoted&quot;');
    expect(html).not.toContain('<script>');
  });
});
