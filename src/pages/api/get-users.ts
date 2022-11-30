import { NextApiRequest, NextApiResponse } from 'next';
import knex from '../../../config/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await knex.select('*').from('users');

  res.status(200).json({ message: 'this route returns all users', users });
};

export default handler;
