import { API_KEY, API_URL, metal, currency, historicDate } from './config.js';
import { AJAX } from './helpers.js';
import forex from '../img/forex.webp ';

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
    result.metal === 'XAU'
      ? (result.metalTxt = 'Gold')
      : result.metal === 'XAG'
      ? (result.metalTxt = 'Silver')
      : '';
    result.forex = forex; // add forex key to object and set to img path
    return result;
  } catch (error) {
    console.log('error', error);
  }
};

export const getAccountUpdate = async () => {
  try {
    const result = await AJAX(`${API_URL}/stat`, requestOptions);
    return result;
  } catch (error) {
    console.log('error', error);
  }
};
