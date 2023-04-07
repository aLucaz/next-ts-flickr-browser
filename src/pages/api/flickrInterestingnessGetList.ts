import type { NextApiRequest, NextApiResponse } from 'next'
// @ts-ignore
import Flickr from 'flickr-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const flickr = new Flickr('9a814ef1051f84f312a7f7050d1f8da0');
  const response = await flickr.interestingness.getList({
    per_page: 10,
    page: 1,
    extras: ['owner_name', 'url_c', 'tags']
  });
  res.status(200).json(response)
}
