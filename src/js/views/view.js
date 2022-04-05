import icons from 'url:../../img/icons.svg';
export default class View {
  _clear() {
    this._parentElement.innerHTML = ''; //clear out HTML container
  }
  renderSpinner() {
    const markup = `
                <div class="spinner">
                  <svg>
                    <use href="${icons}#icon-loader"></use>
                  </svg>
                </div>
        `;
    this._clear(); //clear out HTML container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderData = markUp => {
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  };
}
