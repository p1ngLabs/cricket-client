import * as dotenv from 'dotenv';
dotenv.config();

interface Config {
  db: {
    client: string;
    connection: {
      host: string;
      user: string;
      password: string;
      database: string;
      port: number;
    };
  };
}

const config: Config = {
  db: {
    client: 'pg',
    connection: {
      host: process.env.PSQL_HOST || 'localhost',
      user: process.env.PSQL_USER || '',
      password: process.env.PSQL_PASSWORD || '',
      database: process.env.PSQL_DATABASE || '',
      port: Number(process.env.PSQL_PORT) || 5432,
    },
  },
};

Object.entries(config.db.connection).forEach(([name, value]) => {
  if (!value) throw new Error('Missing config value for ' + name);
});

export default config;
