import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './atoms/Square';
import GameOverModal from './compounds/GameOverModal';
import PlayerFormModal from './compounds/PlayerFormModal';
import NameDisplay from './compounds/NameDisplay';

const Root = styled.div`
  font-family: 'Montserrat', sans serif;
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
      playerOne: {
        name: null,
        symbol: 'X',
      },
      playerTwo: {
        name: null,
        symbol: 'O',
      },
      gameBoard: Array(9).fill(''),
      moveCounter: 0,
      displayFormModal: false,
      displayGameModal: false,
      gameResult: '',
    };
  }

  componentDidMount() {
    this.setState({ displayFormModal: true });
  }

  currentPlayer = () => {
    const {
      moveCounter, playerOne, playerTwo,
    } = this.state;

    return (moveCounter % 2 === 0 ? playerOne : playerTwo);
  };

  closeModal = () => {
    this.setState(
      {
        gameBoard: Array(9).fill(''),
        moveCounter: 0,
        displayGameModal: false,
        gameResult: '',
      },
    );
  }

  handleSetPlayerNames = (playerOneName, playerTwoName) => {
    this.setState({
      playerOne: {
        name: playerOneName,
        symbol: 'X',
      },
      playerTwo: {
        name: playerTwoName,
        symbol: 'O',
      },
    });
  };

  handleClick = (index) => {
    this.storePlayerMove(index);
  }

  storePlayerMove = (index) => {
    const { gameBoard, moveCounter } = this.state;

    if (gameBoard[index] === '') {
      gameBoard[index] = this.currentPlayer().symbol;

      this.setState({
        gameBoard,
        moveCounter: moveCounter + 1,
      }, () => {
        this.checkGameOver();
      });
    }
  }

  restartGame = () => {
    this.setState(
      {
        playerOne: {},
        playerTwo: {},
        gameBoard: Array(9).fill(''),
        moveCounter: 0,
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

    if (moveCounter >= 4) {
      winConditions.forEach((condition) => {
        const [a, b, c] = condition;
        const values = [gameBoard[a], gameBoard[b], gameBoard[c]];

        if (gameBoard[a] !== '' && values.every(value => value === gameBoard[a])) {
          gameIsOver = true;

          this.setState(
            {
              gameResult: 'win',
              displayGameModal: true,
            },
          );
        }

        if (!gameBoard.includes('') && !gameIsOver) {
          gameIsOver = true;

          this.setState(
            {
              displayGameModal: true,
              gameResult: 'tie',
            },
          );
        }
      });
    }
  };

  render() {
    const {
      displayFormModal,
      displayGameModal,
      gameBoard,
      gameResult,
      playerOne,
      playerTwo,
    } = this.state;

    const squares = gameBoard.map((value, index) => {
      const key = `square_${index}`;

      return (
        <Square
          key={key}
          onClick={() => this.handleClick(index)}
          value={value}
        />
      );
    });

    return (
      <Root>
        <NameDisplay
          playerOne={playerOne}
          playerTwo={playerTwo}
        />
        <SquareList>
          {squares}
        </SquareList>
        <PlayerFormModal
          displayModal={displayFormModal}
          onSetPlayerNames={this.handleSetPlayerNames}
        />
        <GameOverModal
          currentPlayerName={this.currentPlayer().name}
          displayModal={displayGameModal}
          gameResult={gameResult}
          onClick={this.closeModal}
          displayButton
        />
      </Root>
    );
  }
}

export default Game;

