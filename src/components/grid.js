import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './square';

const SquareList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px 5px;
  height: 460px;
  width: 460px;
  margin: 100px auto auto auto;
  background: black;
}
`;

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: {},
      playerTwo: {},
      gameBoard: Array(9).fill(''),
      moveCounter: 1,
    }
  }

  playerFactory = (int, symbol) => {
    // let playerName = prompt(`You are Player ${int}. What is your name?`, `Player ${int}`);
    
    return {
      symbol,
      // playerName,
    };
  };
  
  componentDidMount() {
    let playerOne = this.playerFactory(1, 'X');
    let playerTwo = this.playerFactory(2, 'O');
    
    this.setState({playerOne: playerOne, playerTwo: playerTwo})
  }

  currentPlayer = () => {
    return (this.state.moveCounter % 2 === 0 ? this.state.playerTwo : this.state.playerOne)
  }

  onPlayerClick = (boardIndex) => {
    let currentPlayer = this.currentPlayer();
    let playerSymbol = currentPlayer.symbol;

    this.storePlayerMove(parseInt(boardIndex), playerSymbol)
    this.advanceTurn();
  }

  storePlayerMove = (index, value) => {
    let newGameBoard = this.state.gameBoard
    newGameBoard[index] = value

    this.setState({gameBoard: newGameBoard})
  }
  
  advanceTurn = () => {
    this.setState({moveCounter: this.state.moveCounter + 1 })
  }

  render() {
    const squares = [...Array(9).keys()].map((index) => {
      return(
        <Square
          key={index}
          boardIndex={index}
          onPlayerClick={this.onPlayerClick}
          currentPlayer={this.currentPlayer} />
      )
    })

    return(
      <SquareList>
        {squares}
      </SquareList>
    )
  }
}

export default Grid;
