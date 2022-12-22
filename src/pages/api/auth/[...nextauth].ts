import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import config from '../../../../config/config';

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: config.oauth.facebook.clientId,
      clientSecret: config.oauth.facebook.clientSecret,
    }),
    GoogleProvider({
      clientId: config.oauth.google.clientId,
      clientSecret: config.oauth.google.clientSecret,
    }),
    DiscordProvider({
      clientId: config.oauth.discord.clientId,
      clientSecret: config.oauth.discord.clientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
