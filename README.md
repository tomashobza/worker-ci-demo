# CI Workflows Demo

A minimal TypeScript Cloudflare Worker. Bun manages dependencies and runs the
development scripts; Wrangler runs the Worker locally and deploys it to
Cloudflare.

The Worker responds with `Hello, world!`. Pass a `name` query parameter to
customize the response, for example `/?name=Cloudflare`.

## Development

```sh
bun install
bun run dev
```

## Checks

```sh
bun run lint
bun run test
bun run typecheck
bun run build
```

`build` performs a Wrangler dry run without deploying anything.

## Deployment

```sh
bun run deploy
```
