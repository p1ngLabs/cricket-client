interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  gender: 'Female' | 'Male' | 'Other';
  role: 'admin' | 'customer';
  active: boolean;
}

export default IUser;
