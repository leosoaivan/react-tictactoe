import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../../atoms/Modal';

const WinnerSpan = styled.span`
  font-weight: bold;
`;

const GameOverModal = ({
  winnerName,
  displayModal,
  gameResult,
  onClick,
}) => {
  let modalHeaderMessage = '';
  let modalBodyMessage = '';

  if (gameResult === 'win') {
    modalHeaderMessage = 'Congratulations';
    modalBodyMessage = (
      <p>
        With strategy, cunning, and ruthelessness, &nbsp;
        <WinnerSpan>
          {winnerName.toUpperCase()}
        </WinnerSpan>
        &nbsp;
        has claimed absolute victory.
      </p>
    );
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
  winnerName: PropTypes.string,
  onClick: PropTypes.func,
  displayModal: PropTypes.bool,
  gameResult: PropTypes.string,
};

GameOverModal.defaultProps = {
  winnerName: null,
  displayModal: false,
  gameResult: undefined,
  onClick: undefined,
};

export default GameOverModal;
