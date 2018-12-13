import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: white;
`;

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleClick = (boardIndex, currentPlayer) => {
    const { onPlayerClick } = this.props;
    const { value } = this.state;

    if (value === '') {
      this.setState(
        { value: currentPlayer.symbol },
        () => onPlayerClick(boardIndex, currentPlayer),
      );
    }
  }


  render() {
    const {
      boardIndex,
      currentPlayer,
    } = this.props;

    const {
      value,
    } = this.state;

    return (
      <Root onClick={() => this.handleClick(boardIndex, currentPlayer)}>
        {value}
      </Root>
    );
  }
}

Square.propTypes = {
  boardIndex: PropTypes.number,
  onPlayerClick: PropTypes.func,
  currentPlayer: PropTypes.shape,
};

Square.defaultProps = {
  boardIndex: undefined,
  onPlayerClick: () => {},
  currentPlayer: {},
};

export default Square;
