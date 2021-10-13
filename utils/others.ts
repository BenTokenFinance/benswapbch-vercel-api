const https = require('https');

export const getBchPrice =  async () => {
    let body = "";

    await https.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd", (res:any) => {
        res.on("data", (chunk:any) => {
            body += chunk;
        });
    
    }).on("error", (error: any) => {
        
    });

    return body;
};
  