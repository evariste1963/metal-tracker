import { TIMEOUT_SEC } from './config';
import forex from '../img/forex.webp ';

//re-useable timeout function
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//////////////////////////////////////////////////////////////////////////////////
//---devdata only --- to be deleted\\
export let devData = {
  timestamp: 1662832170,
  metal: 'XAU',
  currency: 'GBP',
  exchange: 'FOREXCOM',
  symbol: 'FOREXCOM:XAUGBP',
  ask: 1479.23,
  bid: 1478.36,
  ch: 7.39,
  chp: 0.5,
  currency: 'GBP',
  high_price: 1480.36,
  low_price: 1463.56,
  metal: 'XAU',
  metalTxt: 'Gold',
  open_price: 1481.4,
  open_time: 1648684800,
  prev_close_price: 1481.4,
  price: 1478.79,
  price_gram_18k: 35.6582,
  price_gram_20k: 39.6202,
  price_gram_21k: 41.6012,
  price_gram_22k: 43.5822,
  price_gram_24k: 47.5442,
  symbol: 'FOREXCOM:XAUGBP',
};

devData.forex = forex; //add forex key to object and set to img path
devData.timestamp = Date.now() / 1000;
console.log(devData);

export let devAccount = {
  requests_today: 16,
  requests_yesterday: 31,
  requests_month: 290,
  requests_last_month: 347,
};
//--------------------------------------------
/////////////////////////////////////////////////////////// DELETE DEVdATA BLOCK//////////////

export const AJAX = async function (url, requestOptions) {
  try {
    //this.url = url; //THIS IS WHERE NETLIFY PROBLEM IS!!!!!!! CANNOT ASIGN THIS.URL
    this.url = `https://www.goldapi.io/api/${metal}/${currency}/${historicDate}`;
    this.requestOptions = requestOptions;
    const fetchPro = fetch(this.url, this.requestOptions);
    const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const result = await response.json();
    if (!response.ok) throw new Error(`ooops, something went wrong!!`);
    console.log(result);
    result.metal === 'XAU'
      ? (result.metalTxt = 'Gold')
      : result.metal === 'XAG'
      ? (result.metalTxt = 'Silver')
      : '';
    result.forex = forex; // add forex key to object and set to img path
    return result;
  } catch (err) {
    throw err; //throw errror back
  }
};

//generate timeDate stamp
export const getTimestamp = timestamp => {
  let callTimeStamp = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
  })
    .format(timestamp * 1000)
    .replace(' at', '');

  return callTimeStamp;
};
