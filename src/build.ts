import { mkdir } from 'node:fs/promises';
import { page, renderPage } from './index';

const outDir = 'dist';

const styles = `:root {
  color-scheme: light dark;
  font-family: system-ui, sans-serif;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  min-height: 100vh;
}

main {
  max-width: 40rem;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 0.5rem;
}
`;

await mkdir(outDir, { recursive: true });
await Bun.write(`${outDir}/index.html`, renderPage(page));
await Bun.write(`${outDir}/style.css`, styles);

console.log(`Built static site into ${outDir}/`);
