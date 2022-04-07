export const API_KEY = 'goldapi-15j9sm18l0w7rfer-io';
export const API_URL = 'https://www.goldapi.io/api';
export const TIMEOUT_SEC = 20;
export const metal = 'XAU';
export const currency = 'GBP';
export const historicDate = ''; //"20201112"; // 'yyyy/mm/dd'



//console.log(`https://www.goldapi.io/api/${metal}/${currency}/${historicDate}`);

//endpoint - https://www.goldapi.io/api/:symbol/:currency/:date?

// https://www.goldapi.io/dashboard

// -------------------------------------------delete---------------------------------------------------------------------------------\\
//goldAPI response
/*
{timestamp: 1648737132, metal: 'XAU', currency: 'GBP', exchange: 'FOREXCOM', symbol: 'FOREXCOM:XAUGBP',
ask: 1479.23
bid: 1478.36
ch: 7.39
chp: 0.5
currency: "GBP"
exchange: "FOREXCOM"
high_price: 1480.36
low_price: 1463.56
metal: "XAU"
open_price: 1471.4
open_time: 1648684800
prev_close_price: 1471.4
price: 1478.79
price_gram_18k: 35.6582
price_gram_20k: 39.6202
price_gram_21k: 41.6012
price_gram_22k: 43.5822
price_gram_24k: 47.5442
symbol: "FOREXCOM:XAUGBP"
timestamp: 1648737132}

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

//-------------------user call stats -----\\
/*var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-15j9sm18l0w7rfer-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/stat", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  */
/*
 {4 items
"requests_today":16
"requests_yesterday":31
"requests_month":290
"requests_last_month":347
}
*/
