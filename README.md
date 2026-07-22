# CI Workflows Demo

A minimal Bun static-site generator used to exercise test, lint, and build CI steps. The build writes `dist/index.html` and `dist/style.css`.

```sh
bun install --frozen-lockfile
bun run test
bun run lint
bun run build
```
