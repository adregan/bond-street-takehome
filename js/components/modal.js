import React from 'react';

class Modal extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="modal-container">
        <article className="modal" />
      </div>
    );
  }
}

export default Modal;
