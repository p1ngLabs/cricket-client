import { NextApiRequest, NextApiResponse } from 'next';
import knex from '@database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const books = await knex('books').select('*');
    res.status(200).json(books);
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
};

export default handler;
