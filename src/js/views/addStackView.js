import View from './view';

modalWindow = document.querySelector('.add-stack-window');
overlay = document.querySelector('.overlay');

class AddStackView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Stack successfully uploaded';

  constructor() {
    super();
    /*this._addHandlerShowWindow();
    this._addHandlerHideWindow();*/
  }

  _toggleWindow = e => {
    e.preventDefault();
    modalWindow.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };
}

export default new AddStackView();
