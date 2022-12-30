import { NextApiRequest, NextApiResponse } from 'next';
import knex from '../../../database/db';
import Order from '../../interfaces/Order';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const orders = await knex<Order>('orders').select('*');

  res.status(200).json(orders);
};

export default handler;
