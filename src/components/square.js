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
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      value: ''
    }
  }
  
  handleClick = () => {
    let currentPlayer = this.props.currentPlayer();
    let playerSymbol = currentPlayer.symbol;

    if (this.state.value === '') {
      this.setState({value: playerSymbol})
      this.props.storePlayerMove(parseInt(this.props.boardIndex), playerSymbol)
      this.props.playRound();
    }
  }

  render() {
    return (
      <Root onClick={this.handleClick}>
        { this.state.value }
      </Root>
    )
  }
}

export default Square;