export type SocialProvidersType = 'facebook' | 'google';

interface SocialProfileInterface {
  id: number;
  user_id: number;
  provider: SocialProvidersType;
  username: string;
  image: string;
}

export default SocialProfileInterface;
