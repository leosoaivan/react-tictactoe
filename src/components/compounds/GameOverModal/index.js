import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../atoms/Modal';

const GameOverModal = ({
  currentPlayerName,
  displayModal,
  gameResult,
  onClick,
}) => {
  let modalHeaderMessage = '';
  let modalBodyMessage = '';

  if (gameResult === 'win') {
    modalHeaderMessage = 'Congratulations';
    modalBodyMessage = `With strategy, cunning, and ruthelessness, ${currentPlayerName} has claimed absolute victory.`;
  } else {
    modalHeaderMessage = 'What a tired game';
    modalBodyMessage = 'Unfortunate. Sad. Demeaning to watch...a game where neither player is smart enough to outdo the other.';
  }

  return (
    <Modal
      displayModal={displayModal}
      modalHeader={modalHeaderMessage}
      modalBody={modalBodyMessage}
      onCloseModal={onClick}
      displayButton
    />
  );
};

GameOverModal.propTypes = {
  currentPlayerName: PropTypes.string,
  onClick: PropTypes.func,
  displayModal: PropTypes.bool,
  gameResult: PropTypes.string,
};

GameOverModal.defaultProps = {
  currentPlayerName: '',
  displayModal: false,
  gameResult: undefined,
  onClick: undefined,
};

export default GameOverModal;
