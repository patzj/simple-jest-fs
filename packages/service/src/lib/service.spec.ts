import {
  initializeTestEnvironment,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing';

describe('service', () => {
  let env: RulesTestEnvironment;

  beforeAll(async () => {
    env = await initializeTestEnvironment({
      projectId: 'project-id',
      firestore: {
        host: '127.0.0.1',
        port: 8080,
      },
    });
  });

  it('should work', async () => {
    await env.withSecurityRulesDisabled(async (ctx) => {
      const db = ctx.firestore();
      // ...
    });
  });
});
