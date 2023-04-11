import User from '@models/User';

export function getCustomers() {
  return User.query()
    .select('id', 'username', 'email', 'phone', 'avatar')
    .where('role', 'customer');
}
