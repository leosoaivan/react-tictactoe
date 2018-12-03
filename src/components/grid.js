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
      gameOver: false,
    }
  }

  playerFactory = (int, symbol) => {
    let name = prompt(`You are Player ${int}. What is your name?`, `Player ${int}`);
    
    return {
      symbol,
      name,
    };
  };
  
  componentDidMount() {
    let playerOne = this.playerFactory(1, 'X');
    let playerTwo = this.playerFactory(2, 'O');
    
    this.setState({ playerOne: playerOne, playerTwo: playerTwo })
  }

  currentPlayer = () => {
    return (this.state.moveCounter % 2 === 0 ? this.state.playerTwo : this.state.playerOne)
  }

  onPlayerClick = (boardIndex, currentPlayer) => {
    let playerSymbol = currentPlayer.symbol;

    this.storePlayerMove(parseInt(boardIndex), playerSymbol)
    this.advanceTurn()
    this.checkGameOver(currentPlayer)
  }

  storePlayerMove = (index, value) => {
    let newGameBoard = this.state.gameBoard
    newGameBoard[index] = value

    this.setState({ gameBoard: newGameBoard })
  }
  
  advanceTurn = () => {
    this.setState({ moveCounter: this.state.moveCounter + 1 })
  }

  askForRestart = (msg) => {
    if (window.confirm(msg)) {
      this.restartGame()
    }
  }

  restartGame = () => {
    this.setState(
      {
        playerOne: {},
        playerTwo: {},
        gameBoard: Array(9).fill(''),
        moveCounter: 1,
        gameOver: false,
      }
    )
  }

  checkGameOver = (currentPlayer) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (this.state.moveCounter >= 5) {
      winConditions.forEach((c) => {
        if (this.state.gameBoard[c[0]] === '') {
          return;
        } else if (this.state.gameBoard[c[0]] === this.state.gameBoard[c[1]] &&
                   this.state.gameBoard[c[0]] === this.state.gameBoard[c[2]]) {
          this.setState({ gameOver: true })
          console.log(currentPlayer)
          this.askForRestart(currentPlayer.name + " won! Play again?");
        }
      });
    }

    if (!this.state.gameBoard.includes('')) {
      this.setState({ gameOver: true })
      this.askForRestart('The game tied. Play again?');
    }
  };

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
