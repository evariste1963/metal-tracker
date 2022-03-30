import { API_KEY, API_URL, metal, currency, historicDate } from './config.js';
import spotDataView from './views/spotDataView.js';

let markUp;

const myHeaders = new Headers();
myHeaders.append('x-access-token', API_KEY);
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const getMetalPrice = async () => {
  console.log('clicked');
  try {
    const response = await fetch(
      `${API_URL}/${metal}/${currency}/${historicDate}?`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    markUp = spotDataView._generateSpotMarkup(result, dateTime(result));
    renderData(markUp);

    const spotItems = document.getElementById('spotItems');

    if (result.price - result.prev_close_price < 0)
      spotItems.style.color = 'rgb(199, 15, 15)';

    if (result.price - result.prev_close_price > 0)
      spotItems.style.color = 'rgb(10, 92, 10)';
  } catch (error) {
    console.log('error', error);
  }
};
