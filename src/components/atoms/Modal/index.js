import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const rootDisplay = {
  true: 'block',
  false: 'none',
};

const buttonDisplay = {
  true: 'block',
  false: 'none',
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
  position: fixed;
  background: white;
  width: 50%;
  height: 50%;
  top:40%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 5%;
  text-align: center;
`;

const ModalHeader = styled.div`
  font-size: 5vw;
  text-align: center
  margin: 48px 0px;
`;

const ModalBody = styled.div`
  margin: auto;
  text-align: center;
`;

const CloseButton = styled.button`
  display: ${props => buttonDisplay[props.displayButton]};
  margin: 20px auto auto auto;
  height: 40px;
  width: 50%;
  background-color: green;
  color: white;
  font-weight: 600;
  font-size: 20px;
  border: none;
  border-radius: 2px;

  &:hover {
    background-color: darkseagreen;
  }
`;

const Modal = ({
  displayButton,
  displayModal,
  modalHeader,
  modalBody,
  onCloseModal,
}) => {
  const buttonText = 'Try again, you\'ll feel better';

  return (
    <Root displayModal={displayModal}>
      <ModalContainer>
        <ModalHeader>
          {modalHeader}
        </ModalHeader>
        <ModalBody>
          {modalBody}
        </ModalBody>
        <CloseButton
          displayButton={displayButton}
          onClick={onCloseModal}
        >
          {buttonText}
        </CloseButton>
      </ModalContainer>
    </Root>
  );
};

Modal.propTypes = {
  displayButton: PropTypes.bool,
  displayModal: PropTypes.bool,
  modalHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  modalBody: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onCloseModal: PropTypes.func,
};

Modal.defaultProps = {
  displayButton: false,
  displayModal: false,
  modalHeader: null,
  modalBody: null,
  onCloseModal: null,
};

export default Modal;
