import { env } from 'process';
import type { Knex } from 'knex';
import dbConfig from './src/utils/config/config';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: `postgresql://${env.NEXT_PUBLIC_PSQL_USERNAME}:${env.NEXT_PUBLIC_PSQL_PASSWORD}@${env.NEXT_PUBLIC_PSQL_HOST}:${env.NEXT_PUBLIC_PSQL_PORT}/${env.NEXT_PUBLIC_PSQL_DATABASE}`,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    debug: true,
  },

  production: {
    client: 'pg',
    connection: dbConfig.db,
    pool: {
      min: 0,
      max: 10,
    },
  },
};

module.exports = config;
