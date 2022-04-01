import { API_KEY, API_URL, metal, currency, historicDate } from './config.js';
import spotDataView from './views/spotDataView.js';
import * as helpers from './helpers.js';

let markUp;
const renderData = () => {
  const spotTicker = document.querySelector('.spotTicker');
  spotTicker.innerHTML = markUp;
};

let dateTime = result => {
  return helpers.getTimestamp(
    result.date ? result.timestamp / 1000 : result.timestamp
  );
};

const myHeaders = new Headers();
myHeaders.append('x-access-token', API_KEY);
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const getMetalPrice = async () => {
  try {
    //const response = await AJAX(`${API_URL}/${metal}/${currency}/${historicDate}?`, requestOptions);
    const response = await fetch(
      //-- change to await AJAX and run fetch in helpers
      `${API_URL}/${metal}/${currency}/${historicDate}?`,
      requestOptions
    );
    //this should be in helpers.js --- create getResults async function(response) -- return data after JSON
    const result = await response.json();
    console.log(result);

    markUp = await spotDataView._generateSpotMarkup(result, dateTime(result));
    await renderData(markUp);
    //------- return result after JSON

    const spotItems = document.getElementById('spotItems');

    if (result.price - result.prev_close_price < 0)
      spotItems.style.color = 'rgb(199, 15, 15)';

    if (result.price - result.prev_close_price > 0)
      spotItems.style.color = 'rgb(10, 92, 10)';
  } catch (error) {
    console.log('error', error);
  }
};
