import React from 'react';

class Modal extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="modal-container">
        <article className="modal">
          <header className="modal__header">
            <h2 className="modal__title"></h2>
            <p className="modal__description">Enter your credentials to link your account</p>
          </header>
          <form className="modal__form">
            <input className="modal__input" />
            <input className="modal__input" />
            <button type="submit" className="modal__submit"/>
          </form>
        </article>
      </div>
    );
  }
}

export default Modal;
