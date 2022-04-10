import redis from '@/lib/redis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const key = req.query.slug;
  const value = await redis.get(key);

  res.status(200).json({ value });
}
