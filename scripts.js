"use strict";

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
