import View from './view';

class AccountUpdateView extends View {
  _parentElement = document.querySelector('.userStack'); //add new element box and use this as parent.
  _errorMessage = 'No data found for your query! Please try again ;)';
  _message = '';

  _generateAccMarkup(result) {
    return `
       <div>
      <H1 >account details</span><br>
      <div> ${result.requests_today}</div>
      <div> ${result.requests_yesterday}</div>
      <div> ${result.requests_month}</div>
      <div> ${result.requests_last_month}</div>
      </div>
      </H1>
      `;
  }
}

export default new AccountUpdateView();
