import View from './view';

class StatisticDataView extends View {
  _parentElement = document.querySelector('.statTicker');

  _generateStatMarkup(result) {
    return !result.date
      ? `
    <H1 ><span>Statistics</span><br>
       <div id= statBox>
    <div id=openPrice ><span>Day Open: £${result.open_price}</span></div>
    <div id=buy><span>Day high:  £${result.high_price}</span></div>
    <div id=sell><span>Day low:  £${result.low_price}</span></div>
    <div id=buy><span>Buy:  £${result.ask}</span></div>
    <div id=sell><span>Sell:  £${result.bid}</span></div>
    </div>
    </H1>`
      : console.log(`
    Previous closing price: ${result.prev_close_price}
    Price: ${result.price}`);
  }
}

export default new StatisticDataView();
