import fetch from 'node-fetch';

export const getBchPrice =  async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd");
    const body = await response.json();

    return body;
};
  