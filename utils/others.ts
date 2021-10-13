const https = require('https');

export const getBchPrice =  async () => {
    let body = null;

    await https.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd", (res:any) => {
        let data = "";
    
        res.on("data", (chunk:any) => {
            data += chunk;
        });
    
        res.on("end", () => {
            console.log(data);
            try {
                body = JSON.parse(data);
                // do something with JSON
            } catch (error) {
                console.log(error)
            };
        });
    
    }).on("error", (error: any) => {
        console.log(error)
    });

    return body;
};
  