import { NextApiRequest, NextApiResponse } from 'next';
import knex from '../../../database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const saleBooks = await knex.select('*').from('sale_books');

  res.status(200).json(saleBooks);
};

export default handler;
