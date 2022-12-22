import * as dotenv from 'dotenv';
dotenv.config();

// TODO: refactor oauth interfaces
interface oauthInterface {
  clientId: string;
  clientSecret: string;
}

export interface Config {
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
  oauth: {
    facebook: oauthInterface;
    google: oauthInterface;
    discord: oauthInterface;
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
  oauth: {
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    },
  },
};

Object.entries(config.db.connection).forEach(([name, value]) => {
  if (!value) throw new Error('Missing config value for ' + name);
});

export default config;
