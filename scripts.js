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

// https://www.goldapi.io/dashboard

const API_KEY1 = "goldapi-15j9sm18l0w7rfer-io";
const metal = "XAU";
const currency = "GBP";
const updateBtn = document.querySelector(".btn-update");

var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-15j9sm18l0w7rfer-io");
myHeaders.append("Content-Type", "application/json");

const getTimestamp = timestamp => {
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
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
const getMetalPrice = () => {
  fetch(`https://www.goldapi.io/api/${metal}/${currency}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      let dateTime = getTimestamp(result.timestamp);
      console.log(`
      ${dateTime}
      ${result.metal}:-
      Day low: ${result.low_price}
      Day high: ${result.high_price}
      Price: ${result.price}`);
    })

    .catch(error => console.log("error", error));
};

updateBtn.addEventListener("click", getMetalPrice);
