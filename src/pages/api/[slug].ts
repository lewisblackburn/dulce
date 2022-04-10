import redis from '@/lib/redis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const key = req.query.slug;
  // @ts-expect-error this is temporary
  const value = await redis.get(key);

  res.status(200).json({ value });
}
