export interface PageData {
  title: string;
  heading: string;
  body: string;
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function renderPage(data: PageData): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(data.title)}</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <main>
      <h1>${escapeHtml(data.heading)}</h1>
      <p>${escapeHtml(data.body)}</p>
    </main>
  </body>
</html>
`;
}

export const page: PageData = {
  title: 'CI Workflows Demo',
  heading: 'Hello, world!',
  body: 'A tiny static site built with Bun to exercise CI test, lint, and build steps.',
};
