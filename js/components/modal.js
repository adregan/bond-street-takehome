import React from 'react';
import { logIn, displayError, clearError, addRoutingInfo } from '../actions';
import { isValidRoutingNumber } from '../utils';

class Modal extends React.Component {
  constructor (props) {
    super(props);
  }
  submitForm (event) {
    event.preventDefault();
    const { dispatch, state } = this.props;

    dispatch(clearError());

    if (state === 'routing') {
      const routingInput = event.target.querySelector('[name=routing_number]');
      const routingNumber = routingInput.value;
      if (!isValidRoutingNumber(routingNumber)) {
        return dispatch(displayError('This routing number is not valid.'));
      }
    }

    const formData = Array.prototype.filter.call(event.target.elements, el => el.tagName !== 'BUTTON')
      .map(input => `${input.name}=${input.value}`)
      .join('&');

    if (this.props.state === 'login') {
      dispatch(logIn(formData));
    }
    else {
      dispatch(addRoutingInfo(formData));
    }
  }
  generateInputs (state, loginFields) {
    if (state === 'login') {
      return loginFields.map((field, i) => {
        const type = (field.mask) ? 'password' : 'text';
        return <input required={true} className="modal__input" key={i} type={type} placeholder={field.placeholder} name={field.name} />;
      });
    }
    else {
      return (
        <span>
          <input required={true} className="modal__input" placeholder="Account Number" name="account_number" />
          <input required={true}
            pattern="\d{9}"
            maxLength="9"
            minLength="9"
            className="modal__input"
            placeholder="Routing Number"
            name="routing_number" />
        </span>
      );
    }
  }
  render () {
    const { state, error, loading, loginFields } = this.props;
    const title = (state === 'login') ? 'Log in to your bank account' : 'Enter your routing and account numbers';
    const buttonText = (loading) ? 'Logging in...' : 'Continue';
    return (
      <div className="modal-container">
        <article className="modal">
          <header className="modal__header">
            <h2 className="modal__title">{title}</h2>
            <p className="modal__description">Enter your credentials to link your account.</p>
          </header>
          <form className="modal__form" onSubmit={this.submitForm.bind(this)} encType="application/x-www-form-urlencoded">
            {(error !== '') ? <p className="modal__error">{error}</p> : null}
            {this.generateInputs(state, loginFields)}
            <button type="submit" className={`modal__submit ${(loading) ? 'modal__submit--loading': ''}`} disabled={loading}>
              {buttonText}
            </button>
          </form>
        </article>
      </div>
    );
  }
}

export default Modal;
