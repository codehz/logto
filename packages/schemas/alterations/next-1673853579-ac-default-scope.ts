import { sql } from 'slonik';

import type { AlterationScript } from '../lib/types/alteration.js';

const managementResourceScopeId = 'management-api-scope';
const managementResourceId = 'management-api';
const managementResourceScope = Object.freeze({
  id: managementResourceScopeId,
  name: 'management-api:default',
  description: 'Default scope for management API',
  resourceId: managementResourceId,
});

const alteration: AlterationScript = {
  up: async (pool) => {
    const scope = await pool.maybeOne(sql`
      select * from scopes where id =${managementResourceScopeId}
    `);

    if (!scope) {
      await pool.query(sql`
        insert into scopes
        (id, name, description, resource_id)
        values (${managementResourceScope.id}, ${managementResourceScope.name}, ${managementResourceScope.description}, ${managementResourceScope.resourceId})
      `);
    }
  },
  down: async () => {
    // This is a hotfix for seed, down script is not needed
  },
};

export default alteration;
