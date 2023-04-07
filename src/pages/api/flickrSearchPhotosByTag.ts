import type {NextApiRequest, NextApiResponse} from 'next'
// @ts-ignore
import Flickr from 'flickr-sdk';
import {config} from "@/helper/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const flickr = new Flickr(process.env.FLICKR_API_KEY);
  const response = await flickr.photos.search({
    tags: req.body.tags,
    sort: 'interestingness-desc',
    safe_search: 1,
    per_page: config.PAGE_SIZE,
    page: 1,
    extras: config.EXTRA_INFO
  });
  res.status(200).json(response)
}
