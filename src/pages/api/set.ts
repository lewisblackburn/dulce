import redis from '@/lib/redis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, text } = JSON.parse(req.body);

  const value = await redis.set(name, text);

  res.status(200).json({ value });
}
