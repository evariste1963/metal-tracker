import { requestLimit } from '../config';
import View from './view';

class AccountUpdateView extends View {
  _parentElement = document.querySelector('#accStatus');
  _errorMessage = 'No account data found for your query! Please try again ;)';
  _message = '';

  _generateAccMarkup(result) {
    return `
       <div id='accBox'>
       <p> Request Limit/month: <span>${requestLimit}</span></p>
          <p> Requests today: <span>${result.requests_today}</span></p>
          <p> Requests remaining this month: <span>${
            requestLimit - result.requests_month
          }</span></p>
          <p> Requests last month: <span>${
            result.requests_last_month
          }</span></p>
          </div>
        `;
  }
}

export default new AccountUpdateView();
