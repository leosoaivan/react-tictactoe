import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../atoms/Modal';
import Form from '../../atoms/Form';

class PlayerFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: true,
    };
  }

  handleNameSubmit = (playerOneName, playerTwoName) => {
    const { onSetPlayerNames } = this.props;

    this.setState({
      displayModal: false,
    },
    onSetPlayerNames(playerOneName, playerTwoName));
  }

  render() {
    const {
      displayModal,
    } = this.state;
    const headerMessage = 'Let\'s FCKN do THIS!';
    const formDom = (
      <Form
        onNameSubmit={this.handleNameSubmit}
      />
    );

    return (
      <Modal
        displayModal={displayModal}
        modalHeader={headerMessage}
        modalBody={formDom}
      />
    );
  }
}

PlayerFormModal.propTypes = {
  onSetPlayerNames: PropTypes.func,
};

PlayerFormModal.defaultProps = {
  onSetPlayerNames: undefined,
};

export default PlayerFormModal;
