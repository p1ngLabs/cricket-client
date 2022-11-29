import { env } from 'process';

export type Config = {
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
};

const config: Config = {
  db: {
    host: env.NEXT_PUBLIC_PSQL_HOST || '',
    port: Number(env.NEXT_PUBLIC_PSQL_PORT) || 5342,
    user: env.NEXT_PUBLIC_PSQL_USERNAME || 'cricket',
    password: env.NEXT_PUBLIC_PSQL_PASSWORD || '',
    database: env.NEXT_PUBLIC_PSQL_DATABASE || '',
  },
};

export default config;
