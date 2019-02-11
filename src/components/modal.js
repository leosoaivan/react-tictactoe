import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.section`
  position:fixed;
  background: white;
  width: 50%;
  height: 80%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

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
  const displayClassName = {
    if (gameResult) {
     return { display: 'block'}
    }
  }; 
  const modalBodyMessage = `
    With strategy, cunning, and ruthelessness, ${currentPlayer.name} has claimed absolute victory.
  `;

  const handleClose = () => {
    let gameResult = false;
  }

  return (
    <Root style={displayClassName}>
      <ModalContainer>
        <ModalHeader>
          Congratulations!
        </ModalHeader>
        <ModalBody>
          {modalBodyMessage}
        </ModalBody>
        <button type="button" onClick={handleClose}>Close</button>
      </ModalContainer>>
    </Root>
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
