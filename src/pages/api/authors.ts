import { NextApiRequest, NextApiResponse } from 'next';
import knex from '@database/db';
import Author from '@interfaces/Author';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const authors = await knex<Author>('authors').select('*');

  res.status(200).json(authors);
};

export default handler;
