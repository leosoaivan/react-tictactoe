import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const rootDisplay = {
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
  font-size: 6vw;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const ModalBody = styled.div`
  margin: auto;
  text-align: center;
`;

const CloseButton = styled.button`
`;

const Modal = ({
  displayModal,
  modalHeader,
  modalBody,
  onClick,
}) => (
  (
    <Root displayModal={displayModal}>
      <ModalContainer>
        <ModalHeader>
          {modalHeader}
        </ModalHeader>
        <ModalBody>
          {modalBody}
        </ModalBody>
        <CloseButton onClick={onClick}>
          Submit
        </CloseButton>
      </ModalContainer>
    </Root>
  )
);

Modal.propTypes = {
  displayModal: PropTypes.bool,
  modalHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  modalBody: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  displayModal: false,
  modalHeader: null,
  modalBody: null,
  onClick: null,
};

export default Modal;
