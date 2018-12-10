import React from 'react';
import styled from 'styled-components';
import '../css/modal.css';

const ModalHeader = styled.div`
  display: flex;
  font-size: 120px;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const ModalBody = styled.div`
  margin: auto;
  text-align: center;
`;

const Modal = ({ handleClose, displayModal, gameResult, currentPlayer = {name: '', symbol: ''} }) => {
  const displayClassName = (true ? "modal display-block" : "modal display-none");

  return (
    <div className={displayClassName}>
      <section className="modal-main">
        <ModalHeader>
          Congratulations!
        </ModalHeader>
        <ModalBody>
          With strategy, cunning, and ruthelessness, {currentPlayer.name} has claimed total victory.
        </ModalBody>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  )
}

export default Modal;