import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './atoms/Square';
import GameOverModal from './compounds/GameOverModal';
import PlayerFormModal from './compounds/PlayerFormModal';
import PlayerName from './playerName';

const Root = styled.div`
  font-family: 'Montserrat', sans serif;
`;

const PlayerList = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
`;

const PlayerOne = styled(PlayerName)`
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: end;
  align-self: end;
`;

const PlayerTwo = styled(PlayerName)`
  grid-column-start: 3;
  grid-column-end: 4;
  justify-self: start;
  align-self: end;
`;

const Versus = styled.div`
  font-size: 1.5em;
  color: CornflowerBlue;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: center;
  align-self: end;
  padding-bottom: 5px;
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
      moveCounter: 1,
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

    return (moveCounter % 2 === 0 ? playerTwo : playerOne);
  };

  closeModal = () => {
    this.setState(
      {
        gameBoard: Array(9).fill(''),
        moveCounter: 1,
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
    this.checkGameOver();
  }

  storePlayerMove = (index) => {
    const { gameBoard } = this.state;
    gameBoard[index] = this.currentPlayer().symbol;

    this.setState({
      gameBoard,
    });
  }

  advanceTurn = () => {
    const { moveCounter } = this.state;

    this.setState({ moveCounter: moveCounter + 1 });
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

    if (!gameIsOver) {
      this.advanceTurn();
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
        <PlayerList>
          <PlayerOne
            name={playerOne.name}
            symbol={playerOne.symbol}
          />
          <Versus>
            versus
          </Versus>
          <PlayerTwo
            name={playerTwo.name}
            symbol={playerTwo.symbol}
          />
        </PlayerList>
        <SquareList>
          {squares}
        </SquareList>
        <PlayerFormModal
          displayModal={displayFormModal}
          onSetPlayerNames={this.handleSetPlayerNames}
        />
        <GameOverModal
          currentPlayer={this.currentPlayer()}
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
