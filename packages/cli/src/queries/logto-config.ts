import type { AlterationState, LogtoConfig, LogtoConfigKey } from '@logto/schemas';
import { logtoConfigGuards, LogtoConfigs, AlterationStateKey } from '@logto/schemas';
import { convertToIdentifiers } from '@logto/shared';
import type { Nullable } from '@silverhand/essentials';
import type { CommonQueryMethods, DatabaseTransactionConnection } from 'slonik';
import { sql } from 'slonik';
import { z } from 'zod';

const { table, fields } = convertToIdentifiers(LogtoConfigs);

export const doesConfigsTableExist = async (pool: CommonQueryMethods) => {
  const { rows } = await pool.query<{ regclass: Nullable<string> }>(
    sql`select to_regclass(${LogtoConfigs.table}) as regclass`
  );

  return Boolean(rows[0]?.regclass);
};

export const getRowsByKeys = async (pool: CommonQueryMethods, keys: LogtoConfigKey[]) =>
  pool.query<LogtoConfig>(sql`
    select ${sql.join([fields.key, fields.value], sql`,`)} from ${table}
      where ${fields.key} in (${sql.join(keys, sql`,`)})
  `);

export const updateValueByKey = async <T extends LogtoConfigKey>(
  pool: CommonQueryMethods,
  key: T,
  value: z.infer<typeof logtoConfigGuards[T]>
) =>
  pool.query(
    sql`
      insert into ${table} (${fields.key}, ${fields.value}) 
        values (${key}, ${sql.jsonb(value)})
        on conflict (${fields.key}) do update set ${fields.value}=excluded.${fields.value}
    `
  );

export const getCurrentDatabaseAlterationTimestamp = async (pool: CommonQueryMethods) => {
  try {
    const result = await pool.maybeOne<LogtoConfig>(
      sql`select * from ${table} where ${fields.key}=${AlterationStateKey.AlterationState}`
    );
    const parsed = logtoConfigGuards[AlterationStateKey.AlterationState].safeParse(result?.value);

    return (parsed.success && parsed.data.timestamp) || 0;
  } catch (error: unknown) {
    const result = z.object({ code: z.string() }).safeParse(error);

    // Relation does not exist, treat as 0
    // https://www.postgresql.org/docs/14/errcodes-appendix.html
    if (result.success && result.data.code === '42P01') {
      return 0;
    }

    throw error;
  }
};

export const updateDatabaseTimestamp = async (
  connection: DatabaseTransactionConnection,
  timestamp: number
) => {
  const value: AlterationState = {
    timestamp,
    updatedAt: new Date().toISOString(),
  };

  return updateValueByKey(connection, AlterationStateKey.AlterationState, value);
};
