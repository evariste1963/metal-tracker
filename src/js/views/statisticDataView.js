import View from './view';

class StatisticDataView extends View {
  constructor() {
    super();
  }

  _generateStatMarkup(result) {
    return !result.date
      ? `
    <H1 ><span>Statistics</span><br>
       <div id= statBox>
    <div id=openPrice ><span>Day Open: £${result.open_price}</span></div>
    <div id=buy><span>Day low:  £${result.high_price}</span></div>
    <div id=sell><span>Day high:  £${result.low_price}</span></div>
    </div>
    </H1>`
      : console.log(`
    Previous closing price: ${result.prev_close_price}
    Price: ${result.price}`);
  }
  renderData = markUp => {
    const statTicker = document.querySelector('.statTicker');
    statTicker.innerHTML = markUp;
  };
}

export default new StatisticDataView();
