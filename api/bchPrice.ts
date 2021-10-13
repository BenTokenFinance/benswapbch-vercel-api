import { NowRequest, NowResponse } from "@vercel/node";
import fetch from 'node-fetch';

export default async (req: NowRequest, res: NowResponse): Promise<void> => {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd");
    const body = await response.json();

    res.json(body);
};
  