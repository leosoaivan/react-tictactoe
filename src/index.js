import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Grid from './components/grid';

const Root = styled.div`
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: {},
      playerTwo: {},
      gameBoard: Array(9).fill(''),
      moveCounter: 1,
    }
  }

  componentDidMount() {
    let playerOne = this.playerFactory(1, 'X');
    let playerTwo = this.playerFactory(2, 'O');
    
    this.setState({playerOne: playerOne, playerTwo: playerTwo})
  }
  
  playerFactory = (int, symbol) => {
    // let playerName = prompt(`You are Player ${int}. What is your name?`, `Player ${int}`);
    
    return {
      symbol,
      // playerName,
    };
  };
  
  playRound = () => {
    this.setState({moveCounter: this.state.moveCounter + 1 })
  }

  currentPlayer = () => {
    return (this.state.moveCounter % 2 === 0 ? this.state.playerTwo : this.state.playerOne)
  }

  storePlayerMove = (index, value) => {
    let newGameBoard = this.state.gameBoard
    newGameBoard[index] = value

    this.setState({gameBoard: newGameBoard})
  }

  render() {
    return(
      <Root>
        <Grid 
          currentPlayer={this.currentPlayer}
          playRound={this.playRound}
          storePlayerMove={this.storePlayerMove} />
      </Root>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));