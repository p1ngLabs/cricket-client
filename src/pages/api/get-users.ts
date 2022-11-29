import knex from 'knex';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await knex('users').where('id', 1).first();

  res.status(200).json({ message: 'this route returns all users', users });
};

export default handler;
