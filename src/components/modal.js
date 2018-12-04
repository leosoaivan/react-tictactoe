import React from 'react';
import '../css/modal.css';

const Modal = ({ handleClose, displayModal, gameResult, currentPlayer = {name: '', symbol: ''} }) => {
  const displayClassName = (displayModal ? "modal display-block" : "modal display-none");

  return (
    <div className={displayClassName}>
      <section className="modal-main">
        {currentPlayer.name}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  )
}

export default Modal;