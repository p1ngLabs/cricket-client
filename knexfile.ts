import type { Knex } from 'knex';
import dbConfig from './src/utils/config/config';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: dbConfig.db,
    migrations: {
      tableName: 'migrations',
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds`,
    },
    debug: true,
  },
};

module.exports = config;
