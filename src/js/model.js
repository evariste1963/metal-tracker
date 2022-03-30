import { API_KEY, API_URL, metal, currency, historicDate } from './config.js';
import spotDataView from './views/spotDataView.js';

let markUp;
const renderData = () => {
  const spotTicker = document.querySelector('.spotTicker');
  spotTicker.innerHTML = markUp;
  //create an external function for this bit -- pass in result.values... return outcomes --- use 2nd box for other data (high/low etc)
};

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

let dateTime = result => {
  return getTimestamp(result.date ? result.timestamp / 1000 : result.timestamp);
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
    const response = await fetch(
      `${API_URL}/${metal}/${currency}/${historicDate}?`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    markUp = await spotDataView._generateSpotMarkup(result, dateTime(result));
    await renderData(markUp);

    const spotItems = document.getElementById('spotItems');

    if (result.price - result.prev_close_price < 0)
      spotItems.style.color = 'rgb(199, 15, 15)';

    if (result.price - result.prev_close_price > 0)
      spotItems.style.color = 'rgb(10, 92, 10)';
  } catch (error) {
    console.log('error', error);
  }
};
