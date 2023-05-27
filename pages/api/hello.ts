// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseInterface {
  name: string;
  age: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseInterface>) {
  res.status(200).json({ name: 'John Doe', age: 24 });
}
