import { NextApiRequest, NextApiResponse } from 'next';
import knex from '@database/db';
import SaleBook from '@interfaces/SaleBook';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const saleBooks = await knex<SaleBook>('sale_books').select('*');

  res.status(200).json(saleBooks);
};

export default handler;
