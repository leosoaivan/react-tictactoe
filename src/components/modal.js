import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../css/modal.css';

const ModalHeader = styled.div`
  display: flex;
  font-size: 6em;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const ModalBody = styled.div`
  margin: auto;
  text-align: center;
`;

const Modal = ({
  // handleClose,
  gameResult,
  currentPlayer,
}) => {
  const displayClassName = (gameResult ? 'modal display-block' : 'modal display-none');
  const modalBodyMessage = `
    With strategy, cunning, and ruthelessness, ${currentPlayer.name} has claimed absolute victory.
  `;

  const handleClose = () => {
    let gameResult = false;
  }

  return (
    <div className={displayClassName}>
      <section className="modal-main">
        <ModalHeader>
          Congratulations!
        </ModalHeader>
        <ModalBody>
          {modalBodyMessage}
        </ModalBody>
        <button type="button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  gameResult: PropTypes.string,
  currentPlayer: PropTypes.objectOf(PropTypes.string),
};

Modal.defaultProps = {
  handleClose: () => {},
  gameResult: '',
  currentPlayer: {},
};

export default Modal;
