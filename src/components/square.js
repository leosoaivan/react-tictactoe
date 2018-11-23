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

    if (this.state.value === '') {
      this.setState({value: currentPlayer.symbol})
      this.props.playRound();
      this.props.storePlayerMove(parseInt(this.props.boardIndex), currentPlayer.symbol)
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