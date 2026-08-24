import { CIWorkflow, github } from '@cloudflare/ci';
import type { CiContext, CiParams, GitHub } from '@cloudflare/ci';
import type { WorkflowEvent, WorkflowStep } from 'cloudflare:workers';
import type { Bindings } from './env';

// Restrict signed webhook events to this public repository.
export const sourceControl = github({
  owner: 'tomashobza',
  repo: 'worker-ci-demo',
});

export class CI extends CIWorkflow<GitHub, Bindings> {
  static override getProvider() {
    return sourceControl;
  }

  protected async pipeline(
    _event: WorkflowEvent<CiParams<GitHub>>,
    _step: WorkflowStep,
    ci: CiContext
  ): Promise<void> {
    const deps = await ci.runner({
      name: 'install',
      command: 'npm ci',
      cache: { inputs: ['package.json', 'package-lock.json'] },
    });

    await Promise.all([
      deps.runner({ name: 'lint', command: 'npm run lint' }),
      deps.runner({ name: 'test', command: 'npm run test' }),
      deps.runner({ name: 'typecheck', command: 'npm run typecheck' }),
      deps.runner({ name: 'build', command: 'npm run build' }),
    ]);

    await deps.runner({
      name: 'deploy',
      command: 'npm exec wrangler deploy',
      cloudflareCredentials: {
        accountId: this.env.CLOUDFLARE_DEPLOY_ACCOUNT_ID,
      },
    });
  }
}
