import View from './view';

class StatisticDataView extends View {
  constructor() {
    super();
  }

  _generateStatMarkup(result) {
    return !result.date
      ? `
    <H1 ><span>Statistics</span><br>
   
    <div id= spotBox>
    
    <p id=spotPrice >£${result.price}</p>
    
    
    >
        </div>
    <div id=buy><span>BUY:  £${result.ask}</span></div>
    <div id=sell><span>SELL:  £${result.bid}</span></div>
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
