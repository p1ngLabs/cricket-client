import { NextApiRequest, NextApiResponse } from 'next';
import { getBooks } from '@services/bookServices';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const books = await getBooks();
    res.status(200).json(books);
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
};

export default handler;
