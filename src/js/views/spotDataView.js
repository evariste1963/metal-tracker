import View from './view';

class SpotDataView extends View {
  constructor() {
    super();
  }

  _generateSpotMarkup(result, callTime) {
    return !result.date
      ? `
    <H1 ><span>Latest Price</span><br>
    <div id=callTime>${callTime}</div>
    <div id= spotBox>
    <div id=spotItems>
    <p id=spotPrice >£${result.price}</p>
    <p id=changeV >${(result.price - result.prev_close_price).toFixed(2)}</p>
    <p id=changeP>${(
      ((result.price - result.prev_close_price) / result.prev_close_price) *
      100
    ).toFixed(2)}%</p>
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
