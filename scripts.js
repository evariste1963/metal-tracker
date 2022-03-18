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
const gold1 = "XAU";
const updateBtn1 = document.querySelector(".btn-update");

var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-15j9sm18l0w7rfer-io");
myHeaders.append("Content-Type", "application/json");
/*let timestam;
let date = new Date(timestam * 1000);
const datevalues = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
].join(":");
*/
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
const getMetalPrice1 = () => {
  fetch("https://www.goldapi.io/api/XAU/GBP", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      let date = new Date(result.timestamp * 1000);

      //const datevalues = [
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hours = date.getHours();
      let mins = date.getMinutes();
      let secs = date.getSeconds();
      console.log(`
      ${year} ${month.toString().padStart(2, 0)} ${day
        .toString()
        .padStart(2, 0)} ${hours.toString().padStart(2, 0)} ${mins
        .toString()
        .padStart(2, 0)} ${secs.toString().padStart(2, 0)}
      Gold:-
      Day low: ${result.low_price}
      Day high: ${result.high_price}
      Price: ${result.price}`);
    })

    .catch(error => console.log("error", error));
};

updateBtn1.addEventListener("click", getMetalPrice1);
