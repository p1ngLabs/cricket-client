import { NextApiRequest, NextApiResponse } from 'next';
import knex from '@database/db';
import Category from '@interfaces/Category';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cates = await knex<Category>('categories').select('*');

  res.status(200).json(cates);
};

export default handler;
