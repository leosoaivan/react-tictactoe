import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.form`
  width: 100%;
`;

const InputDom = styled.div`
  width: 100%;
  margin: 10px 0 40px 0;
  text-align: left;
`;

const CloseButton = styled.button`
  margin: auto;
  height: 40px;
  width: 50%;
  background-color: green;
  color: white;
  font-weight: 600;
  font-size: 20px;
  border: none;
  border-radius: 2px;

  &:hover {
    background-color: aquamarine;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { playerOneName, playerTwoName } = this.state;
    const { onNameSubmit } = this.props;

    onNameSubmit(playerOneName, playerTwoName);
  };

  render() {
    const {
      playerOneName,
      playerTwoName,
    } = this.state;

    const labelOne = 'What\'s your name Player One?';
    const labelTwo = 'And yours, Player Two?';

    return (
      <Root onSubmit={this.handleSubmit}>
        <InputDom>
          <label id="player1" htmlFor="player1">
            {labelOne}
            <br />
            <input type="text" name="playerOneName" value={playerOneName} onChange={this.handleChange} placeholder="Player One" required />
          </label>
        </InputDom>
        <InputDom>
          <label id="player2" htmlFor="player2">
            {labelTwo}
            <br />
            <input type="text" name="playerTwoName" value={playerTwoName} onChange={this.handleChange} placeholder="Player Two" required />
          </label>
        </InputDom>
        <CloseButton type="submit">
          Submit
        </CloseButton>
      </Root>
    );
  }
}

Form.propTypes = {
  onNameSubmit: PropTypes.func,
};

Form.defaultProps = {
  onNameSubmit: null,
};

export default Form;
