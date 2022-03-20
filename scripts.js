"use strict";

// https://www.goldapi.io/dashboard
//https://www.goldapi.io/api/"XAU"/"GBP"/'20200101'
const API_KEY = "goldapi-15j9sm18l0w7rfer-io";
const metal = "XAU";
const currency = "GBP";
const historicDate = ""; //"20201112"; // 'yyyy/mm/dd'
const updateBtn = document.querySelector(".btn-update");
let priceChart = document.getElementById("stackerChart").getContext("2d");

let displayChart = new Chart(priceChart, {
  type: "line",
  data: {
    labels: ["14Mar22", "15Mar22", "16Mar22", "17Mar22", "18Mar22"],
    datasets: [
      {
        label: "Price",
        data: [1400.36, 1432.2, 1436.98, 1437.61, 1450.07],
      },
    ],
  },
});

const myHeaders = new Headers();
myHeaders.append("x-access-token", API_KEY);
myHeaders.append("Content-Type", "application/json");

const getTimestamp = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let callDate = `${year}-${month.toString().padStart(2, 0)}-${day
    .toString()
    .padStart(2, 0)} ${hours.toString().padStart(2, 0)}:${mins
    .toString()
    .padStart(2, 0)}:${secs.toString().padStart(2, 0)}`;

  return callDate;
};

//create an external function for this bit -- pass in result.values... return outcomes
let dateTime = (result) => {
  return getTimestamp(result.date ? result.timestamp / 1000 : result.timestamp);
};
//render data -- currently just consolelogging
const renderData = (result, callTime) => {
  //create an external function for this bit -- pass in result.values... return outcomes
  !result.date
    ? console.log(`
${callTime}
${result.metal}:-
Day low: ${result.low_price}
Day high: ${result.high_price}
Price: ${result.price}`)
    : console.log(`
${callTime}
Previous closing price: ${result.prev_close_price}
Price: ${result.price}`);
};

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
console.log(`https://www.goldapi.io/api/${metal}/${currency}/${historicDate}`);
//endpoint - https://www.goldapi.io/api/:symbol/:currency/:date?

const getMetalPrice = async () => {
  try {
    const response = await fetch(
      `https://www.goldapi.io/api/${metal}/${currency}/${historicDate}?`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    renderData(result, dateTime(result));
  } catch (error) {
    console.log("error", error);
  }
};

updateBtn.addEventListener("click", getMetalPrice);

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
const updateBtn = document.querySelector(".btn-update");
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
updateBtn.addEventListener("click", getMetalPrice);
*/
