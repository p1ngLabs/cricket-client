import { NextApiRequest, NextApiResponse } from 'next';
import knex from '../../../database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const orders = await knex.select('*').from('orders');

  res.status(200).json(orders);
};

export default handler;
