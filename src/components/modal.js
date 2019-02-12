import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const rootDisplay = {
  true: 'block',
  false: 'none'
};

const Root = styled.div`
  display: ${props => rootDisplay[props.displayModal]};
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
  currentPlayer,
  gameResult,
  handleClose,
  displayModal,
}) => {
  let modalHeaderMessage = ''
  let modalBodyMessage = ''

  if (gameResult === 'win') {
    modalHeaderMessage = 'Congratulations';
    modalBodyMessage =   `With strategy, cunning, and ruthelessness, ${currentPlayer.name} has claimed absolute victory.`;
  } else {
    modalHeaderMessage = 'What a tired game';
    modalBodyMessage = `Unfortunate. Sad. Demeaning to watch...a game where neither player is smart enough to outdo the other.`
  }

  return (
    <Root displayModal={displayModal}>
      <ModalContainer>
        <ModalHeader>
          {modalHeaderMessage}
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
  currentPlayer: PropTypes.shape({
    name: PropTypes.string
  }),
  displayModal: PropTypes.bool,
};

Modal.defaultProps = {
  handleClose: undefined,
  gameResult: '',
  currentPlayer: {},
  displayModal: false,
};

export default Modal;
