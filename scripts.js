"use strict";
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

//goldAPI response
/*
{timestamp: 1647631965, metal: 'XAU', currency: 'GBP', exchange: 'FOREXCOM', symbol: 'FOREXCOM:XAUGBP', …}ask: 1457.17bid: 1456.4ch: -20.5chp: -1.39currency: "GBP"exchange: "FOREXCOM"high_price: 1478.16low_price: 1454.94metal: "XAU"open_price: 1477.28open_time: 1647561600prev_close_price: 1477.28price: 1456.78price_gram_18k: 35.1274price_gram_20k: 39.0305price_gram_21k: 40.982price_gram_22k: 42.9335price_gram_24k: 46.8366symbol: "FOREXCOM:XAUGBP"timestamp: 1647631965[[Prototype]]: Object

2022-03-18 19:32:45
XAU:-
Day low: 1454.94
Day high: 1478.16
Price: 1456.78
*/

// https://www.goldapi.io/dashboard

const API_KEY1 = "goldapi-15j9sm18l0w7rfer-io";
const metal = "XAU";
const currency = "GBP";
const updateBtn = document.querySelector(".btn-update");

const myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-15j9sm18l0w7rfer-io");
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
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const getMetalPrice = async () => {
  try {
    const response = await fetch(
      `https://www.goldapi.io/api/${metal}/${currency}`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    let dateTime = getTimestamp(result.timestamp);
    console.log(`
  ${dateTime}
  ${result.metal}:-
  Day low: ${result.low_price}
  Day high: ${result.high_price}
  Price: ${result.price}`);
  } catch (error) {
    console.log("error", error);
  }
};

updateBtn.addEventListener("click", getMetalPrice);
