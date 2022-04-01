import View from './view';

class SpotDataView extends View {
  constructor() {
    super();
  }

  _generateSpotMarkup(result, callTime) {
    const changeValue = (result.price - result.prev_close_price).toFixed(2);
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

    return !result.date
      ? `
    <H1 ><span>Latest Price</span><br>
    <div id=callTime>${callTime}</div>
    <div id= spotBox>
    <div id=spotItems>
    <p id=spotPrice >£${result.price}</p>
    <p class ='${arrow}'></p>
    <p class='changeV'>${changeValue}</p>
    <p class=changeP>${changePercentage}%</p>
        </div>
    <div id=buy><span>BUY:  £${result.ask}</span></div>
    <div id=sell><span>SELL:  £${result.bid}</span></div>
    </div>
    </H1>`
      : console.log(`
  ${callTime}
  Previous closing price: ${result.prev_close_price}
  Price: ${result.price}`);
  }
}

export default new SpotDataView();
