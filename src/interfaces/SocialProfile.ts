import { SocialProviders } from './SocialProviders';

export default interface SocialProfile {
  id: number;
  user_id: number;
  provider: SocialProviders;
  username: string;
  image: string;
}
