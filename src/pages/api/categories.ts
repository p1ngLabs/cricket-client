import { NextApiRequest, NextApiResponse } from 'next';
import knex from '../../../database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cates = await knex.select('*').from('categories');

  res.status(200).json(cates);
};

export default handler;
