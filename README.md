# CI Workflows Demo

A minimal TypeScript Cloudflare Worker. npm manages dependencies and runs the
development scripts; Wrangler runs the Worker locally and deploys it to
Cloudflare.

The Worker responds with `Hello, world!`. Pass a `name` query parameter to
customize the response, for example `/?name=Cloudflare`.

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm run test
npm run typecheck
npm run build
```

`build` performs a Wrangler dry run without deploying anything.

## Cloudflare GitHub CI PoC

[`cloudflare-ci/`](./cloudflare-ci/) contains the signed-webhook Worker and
Workflow from Cloudflare's GitHub CI example. It is restricted to
`tomashobza/worker-ci-demo` and runs `npm ci`, lint, tests, typechecking, build,
and deployment for each push. See its [runbook](./cloudflare-ci/AGENTS.md) for
resource and secret setup.

## Deployment

```sh
npm run deploy
```
