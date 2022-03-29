import View from './view';

class SpotDataView extends View {
  constructor() {
    super();
  }

  _generateMarkup = function (result, callTime) {
    return !result.date
      ? `
    <H1 ><span>Latest Price</span><br>
    <div id=callTime>${callTime}</div>
    <div id= spotBox>
    <span id=spotPrice >£ ${result.price}</span>
    <div id=buy><span>BUY:  £${result.ask}</span></div>
    <div id=sell><span>SELL:  £${result.bid}</span></div>
    </div>
    </H1>`
      : console.log(`
  ${callTime}
  Previous closing price: ${result.prev_close_price}
  Price: ${result.price}`);
  };
}
export default new SpotDataView();
