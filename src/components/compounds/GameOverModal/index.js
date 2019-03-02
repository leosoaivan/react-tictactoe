import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../atoms/Modal';

const GameOverModal = ({
  currentPlayer,
  displayModal,
  gameResult,
  onClick,
}) => {
  let modalHeaderMessage = '';
  let modalBodyMessage = '';

  if (gameResult === 'win') {
    modalHeaderMessage = 'Congratulations';
    modalBodyMessage = `With strategy, cunning, and ruthelessness, ${currentPlayer.name} has claimed absolute victory.`;
  } else {
    modalHeaderMessage = 'What a tired game';
    modalBodyMessage = 'Unfortunate. Sad. Demeaning to watch...a game where neither player is smart enough to outdo the other.';
  }

  return (
    <Modal
      displayModal={displayModal}
      modalHeader={modalHeaderMessage}
      modalBody={modalBodyMessage}
      onClick={onClick}
    />
  );
};

GameOverModal.propTypes = {
  currentPlayer: PropTypes.shape({
    name: PropTypes.string,
  }),
  onClick: PropTypes.func,
  displayModal: PropTypes.bool,
  gameResult: PropTypes.string,
};

GameOverModal.defaultProps = {
  currentPlayer: undefined,
  displayModal: false,
  gameResult: undefined,
  onClick: undefined,
};

export default GameOverModal;
