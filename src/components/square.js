import React, { Component } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: white;
`

class Square extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  handleClick = (index) => {
    let currentPlayer = this.props.currentPlayer()
    let playerSymbol = currentPlayer.symbol

    if (this.state.value === '') {
      this.setState(
        {value: playerSymbol},
        () => this.props.onPlayerClick(index, currentPlayer)
      )
    }
  }

  render() {
    return(
      <Root onClick={() => this.handleClick(this.props.boardIndex)}>
        {this.state.value}
      </Root>
    )
  }
}

export default Square;
