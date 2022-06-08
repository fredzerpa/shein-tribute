const SHEIN_PRODUCTS_URI = `https://eur.shein.com/c-index/getProducts?_lang=en&_ver=1.1.8&limit=20&page=1&routeId=00200200&type=selection`

fetch(SHEIN_PRODUCTS_URI).then(console.log);