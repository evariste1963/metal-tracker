import View from './view';

class StatisticDataView extends View {
  _parentElement = document.querySelector('.statTicker');
  _errorMessage = 'No statistics found for your query! Please try again ;)';
  _message = '';

  _generateStatMarkup(result) {
    return !result.date
      ? `
    <H1 ><span>Spot details</span><br></H1><br>
       <div id= statBox>
    <div id=openPrice >Day Open:<span>${parseFloat(result.open_price).toFixed(
      2
    )}</span></div>
    <div id=high>Day high:<span>${parseFloat(result.high_price).toFixed(
      2
    )}</span></div>
    <div id=low>Day low:<span>${parseFloat(result.low_price).toFixed(
      2
    )}</span></div>
    <div id=buy>Buy:<span>${parseFloat(result.ask).toFixed(2)}</span></div>
    <div id=sell>Sell:<span>${parseFloat(result.bid).toFixed(2)}</span></div>
    <div id=P18K>18 Karat/grm:<span>${result.price_gram_18k}</span></div>
    <div id=P20K>20 Karat/grm:<span>${result.price_gram_20k}</span></div>
    <div id=P22K>22 Karat/grm:<span>${result.price_gram_22k}</span></div>
    <div id=P24K>24 Karat/grm:<span>${result.price_gram_22k}</span></div>
    </div>
    `
      : console.log(`
    Previous closing price: ${result.prev_close_price}
    Price: ${result.price}`);
  }
}

export default new StatisticDataView();
