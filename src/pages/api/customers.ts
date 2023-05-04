import { NextApiRequest, NextApiResponse } from 'next';
import { getCustomers } from '@/server/services/userServices';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const customers = await getCustomers();

  res.status(200).json(customers);
};

export default handler;
