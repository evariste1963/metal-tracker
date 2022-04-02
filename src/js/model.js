import { API_KEY, API_URL, metal, currency, historicDate } from './config.js';
//import spotDataView from './views/spotDataView.js';
import { AJAX, getTimestamp } from './helpers.js';

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
   
    return result;
  } catch (error) {
    console.log('error', error);
  }
};
