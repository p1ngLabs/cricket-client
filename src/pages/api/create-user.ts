import knex from '../../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await knex('users').insert({
    firstname: 'phuc',
    lastname: 'nguyen',
    username: 'phuc1nguyen',
    email: 'phuc.ng13988@gmail.com',
    password: '123456',
    avatar: 'testing',
    active: true,
    phone: '0918201398',
    createdAt: 'testing',
  });

  res.status(200).json({ user });
};

export default handler;
