import { NextApiRequest, NextApiResponse } from 'next';
import knex from '../../../database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const books = await knex.select('*').from('books');

  res.status(200).json(books);
};

export default handler;
