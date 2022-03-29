import View from './view';

class SpotDataView extends View {
  constructor() {
    super();
  }

  _generateMarkup(result, callTime) {
    return !result.date
      ? `
    <H1 ><span>Latest Price</span><br>
    <div id=callTime>${callTime}</div>
    <div id= spotBox>
    <p id=spotPrice >£ ${result.price}  <span id=change>${(
          ((result.price - result.prev_close_price) / result.prev_close_price) *
          100
        ).toFixed(2)}%</span></p>
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
