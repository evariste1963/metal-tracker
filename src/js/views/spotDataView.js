import View from './view';
import { conversionValue } from '../config';
import { getTimestamp } from '../helpers.js';
import statisticDataView from './statisticDataView';

class SpotDataView extends View {
  _parentElement = document.querySelector('.spotTicker');
  _errorMessage = 'No data found for your query! Please try again ;)';
  _message = 'fetching data, please wait..';

  _generateSpotMarkup(result) {
    console.log(result);
    // let statMarkUp = statisticDataView._generateStatMarkup(result);
    // statisticDataView.renderData(statMarkUp);

    const dateTime = getTimestamp((result.timestamp = Date.now() / 1000));

    /*const changeValue = (result.price - result.prev_close_price).toFixed(2);
    const changePercentage = (
      ((result.price - result.prev_close_price) / result.prev_close_price) *
      100
    ).toFixed(2);

    const arrow =
      changeValue < 0
        ? 'arrow arrow-down'
        : changeValue > 0
        ? 'arrow arrow-up'
        : '';

    const dayChange =
      result.price - result.prev_close_price > 0
        ? 'color: var(--price-up-color)'
        : 'color: var(--price-drop-color)';

    result.exchange === 'FOREXCOM'
      ? (result.srcExchange = `<img id=forex src=${result.forex} alt='forex' width='120' height='20' />`) //use forex img from adjusted result object
      : (result.srcExchange = result.exchange);
*/
    return !result.date
      ? `
   ${result.metalTxt} / oz</div>
    <div id= spotBox>
    <div id=spotItems style='dayChange'>
    <p id=spotPrice >${(result.cena * conversionValue).toFixed(2)}</p>
    <p class ='arrow'></p>
    <div id='change'>
    <p class='changeV'>changeValue</p>
    <p class=changeP>changePercentage%</p>
          </div>
        </div>
      </div>
     <div id=callTime>${result.timestamp}</div>
   `
      : console.log(`
  ${callTime}
  Previous closing price: ${result.prev_close_price}
  Price: ${result.price}`);
  }
}

export default new SpotDataView();

// {data: '2022-05-13', cena: 264.96, metalTxt: 'Gold'}cena: 264.96data: "2022-05-13"metalTxt: //"Gold"[[Prototype]]: Object
