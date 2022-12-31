import { NextApiRequest, NextApiResponse } from 'next';
import knex from '@database/db';
import Book from '@interfaces/Book';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const books = await knex<Book>('books').select('*');

  res.status(200).json(books);
};

export default handler;
