const https = require('https');

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd";

export const getBchPrice =  async () => {
    let body = null;

    await https.get(url, (res:any) => {
        let data = "";
    
        res.on("data", (chunk:any) => {
            data += chunk;
        });
    
        res.on("end", () => {
            try {
                body = JSON.parse(data);
                // do something with JSON
            } catch (error) {
                // do something?
            };
        });
    
    }).on("error", (error: any) => {
        // do something?
    });

    return body;
};
  