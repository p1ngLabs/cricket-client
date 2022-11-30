import type { Knex } from 'knex';
import dbConfig from './config/config';

const config: { [key: string]: Knex.Config } = {
  development: {
    ...dbConfig.db,
    migrations: {
      tableName: 'migrations',
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds`,
    },
  },

  production: {
    ...dbConfig.db,
    pool: {
      min: 0,
      max: 8,
    },
  },
};

module.exports = config;
