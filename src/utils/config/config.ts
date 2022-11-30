import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
  db: {
    client: string;
    connection: {
      host: string;
      port: number;
      user: string;
      password: string;
      database: string;
    };
  };
};

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
