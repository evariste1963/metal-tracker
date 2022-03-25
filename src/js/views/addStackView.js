import View from './view';

class AddStackView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Stack successfully uploaded';

  constructor() {
    super();
    /*this._addHandlerShowWindow();
    this._addHandlerHideWindow();*/
  }
  /*
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnHide.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _gererateMarkup() {}
  */
}

export default new AddStackView();
