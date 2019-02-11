import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './square';
import Modal from './modal';

const Root = styled.div`
`;

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

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: {},
      playerTwo: {},
      gameBoard: Array(9).fill(''),
      moveCounter: 1,
      displayModal: false,
      gameResult: '',
    };
  }

  componentDidMount() {
    const playerOne = this.playerFactory(1, 'X');
    const playerTwo = this.playerFactory(2, 'O');

    this.setState({ playerOne, playerTwo });
  }

  playerFactory = (int, symbol) => {
    const name = prompt(`You are Player ${int}. What is your name?`, `Player ${int}`);

    return {
      symbol,
      name,
    };
  };

  currentPlayer = () => {
    const {
      moveCounter, playerOne, playerTwo,
    } = this.state;

    return (moveCounter % 2 === 0 ? playerTwo : playerOne);
  };

  onPlayerClick = (boardIndex, currentPlayer) => {
    const playerSymbol = currentPlayer.symbol;

    this.storePlayerMove(parseInt(boardIndex, 10), playerSymbol);
    this.checkGameOver(currentPlayer);
    // this.advanceTurn()
  }

  storePlayerMove = (index, value) => {
    const { gameBoard } = this.state;
    const newGameBoard = gameBoard;
    newGameBoard[index] = value;

    this.setState({ gameBoard: newGameBoard });
  }

  advanceTurn = () => {
    const { moveCounter } = this.state;

    this.setState({ moveCounter: moveCounter + 1 });
  }

  askForRestart = (msg) => {
    if (window.confirm(msg)) {
      this.restartGame();
    }
  }

  restartGame = () => {
    this.setState(
      {
        playerOne: {},
        playerTwo: {},
        gameBoard: Array(9).fill(''),
        moveCounter: 1,
      },
    );
  }

  checkGameOver = () => {
    const {
      moveCounter,
      gameBoard,
    } = this.state;

    let gameIsOver = false;

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

    if (moveCounter >= 5) {
      winConditions.forEach((c) => {
        if (gameBoard[c[0]] === gameBoard[c[1]]
        && gameBoard[c[0]] === gameBoard[c[2]]) {
          gameIsOver = true;
          this.showModal();
        }
      });
    }

    if (!gameIsOver) {
      this.advanceTurn();
    }

    if (!gameBoard.includes('')) {
      this.askForRestart('The game tied. Play again?');
    }
  };

  showModal = () => {
    this.setState({ displayModal: true, gameResult: 'win' });
  }

  hideModal = () => {
    this.setState(
      { displayModal: false },
      console.log(this.state)
    );
  }

  render() {
    const squares = [...Array(9).keys()].map(index => (
      <Square
        key={index}
        boardIndex={index}
        onPlayerClick={this.onPlayerClick}
        currentPlayer={this.currentPlayer()}
      />
    ));

    const {
      displayModal,
      gameResult,
    } = this.state;

    return (
      <Root>
        <SquareList>
          {squares}
        </SquareList>
        <Modal
          handleClose={this.hideModal}
          displayModal={displayModal}
          gameResult={gameResult}
          currentPlayer={this.currentPlayer()}
        />
      </Root>
    );
  }
}

export default Game;
