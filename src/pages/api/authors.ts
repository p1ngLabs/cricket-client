import { NextApiRequest, NextApiResponse } from 'next';
import knex from '../../../database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const authors = await knex.select('*').from('authors');

  res.status(200).json(authors);
};

export default handler;
