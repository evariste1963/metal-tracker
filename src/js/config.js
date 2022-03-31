export const API_KEY = 'goldapi-15j9sm18l0w7rfer-io';
export const API_URL = 'https://www.goldapi.io/api';
export const metal = 'XAU';
export const currency = 'GBP';
export const historicDate = ''; //"20201112"; // 'yyyy/mm/dd'

//console.log(`https://www.goldapi.io/api/${metal}/${currency}/${historicDate}`);

//endpoint - https://www.goldapi.io/api/:symbol/:currency/:date?

// https://www.goldapi.io/dashboard

// -------------------------------------------delete---------------------------------------------------------------------------------\\
//goldAPI response
/*
{timestamp: 1647631965, metal: 'XAU', currency: 'GBP', exchange: 'FOREXCOM', symbol: 'FOREXCOM:XAUGBP', …}ask: 1457.17bid: 1456.4ch: -20.5chp: -1.39currency: "GBP"exchange: "FOREXCOM"high_price: 1478.16low_price: 1454.94metal: "XAU"open_price: 1477.28open_time: 1647561600prev_close_price: 1477.28price: 1456.78price_gram_18k: 35.1274price_gram_20k: 39.0305price_gram_21k: 40.982price_gram_22k: 42.9335price_gram_24k: 46.8366symbol: "FOREXCOM:XAUGBP"timestamp: 1647631965[[Prototype]]: Object

2022-03-18 19:32:45
XAU:-
Day low: 1454.94
Day high: 1478.16
Price: 1456.78
*/

//result from historic date:
/*
{date: '2020-11-12T10:30:00.000Z', timestamp: 1605177000000, metal: 'XAU', exchange: 'LBMA', currency: 'GBP', …}
ch: -6.2508
chp: -0.439
currency: "GBP"
date: "2020-11-12T10:30:00.000Z"
exchange: "LBMA"
metal: "XAU"
prev_close_price: 1430.2235
price: 1423.9727
price_gram_18k: 34.3363
price_gram_20k: 38.1515
price_gram_21k: 40.0591
price_gram_22k: 41.9666
price_gram_24k: 45.7818
timestamp: 1605177000000
*/

/*
const API_KEY = "b0ifc1x03it7x9ysdkymb90iea14322975t5ld01t0ap56iad6u1h37vuro3";
const gold = "XAU";
const btnUpdate = document.querySelector(".btn-update");
const getMetalPrice = () => {
  fetch(
    `https://www.metals-api.com/api/latest?access_key=${API_KEY}&base=USD&symbols=${gold}`
  )
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
      const date = data.timestamp;
    });
};
btnUpdate.addEventListener("click", getMetalPrice);
*/
