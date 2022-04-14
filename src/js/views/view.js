import icons from 'url:../../img/icons.svg';
import spinner from '../../img/Spinner-1s-200px.svg';
export default class View {
  _clear() {
    this._parentElement.innerHTML = ''; //clear out HTML container
  }
  renderSpinner() {
    const markup = `
                <div class="spinner">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                  <!-- ><svg>
                    <use href="${spinner} ></use>
                  </svg> -->
                  <p> ${this._message}</p>
                </div>
        `;
    this._clear(); //clear out HTML container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderData = markUp => {
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  };

  renderError(message = this._errorMessage) {
    const markup = `
  <div class="error">
            <div class = 'svgBox'>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
  `;
    this._clear(); //clear out HTML container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
  <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
            </div>
  `;
    this._clear(); //clear out HTML container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
