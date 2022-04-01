import { API_KEY, API_URL, metal, currency, historicDate } from './config.js';
import spotDataView from './views/spotDataView.js';
import { AJAX, getTimestamp } from './helpers.js';

let markUp;
const renderData = () => {
  const spotTicker = document.querySelector('.spotTicker');
  spotTicker.innerHTML = markUp;
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
    const result = await AJAX(
      `${API_URL}/${metal}/${currency}/${historicDate}?`,
      requestOptions
    );
   
    
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
