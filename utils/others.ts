const https = require('https');

export const getBchPrice =  async () => {
    let body = "";

    await https.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd", (res:any) => {
        res.on("data", (chunk:any) => {
            body += chunk;
        });
    
        res.on("end", () => {
            try {
                body = JSON.parse(data);
                // do something with JSON
            } catch (error) {
                
            };
        });
    
    }).on("error", (error: any) => {
        
    });

    return body;
};
  