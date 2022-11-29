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
    host: process.env.PSQL_HOST || 'localhost',
    port: Number(process.env.PSQL_PORT) || 5432,
    user: process.env.PSQL_USERNAME || 'cricket',
    password: process.env.PSQL_PASSWORD || 'Cricket@123',
    database: process.env.PSQL_DATABASE || 'cricket-db',
  },
};

Object.entries(config.db).forEach(([name, value]) => {
  console.log(value);
  if (!value) throw new Error('Missing config value for ' + name);
});

export default config;
