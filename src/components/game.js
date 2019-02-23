import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Square from './square';
import Modal from './modal';

const Root = styled.div`
`;

const PlayerList = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
`;

const PlayerStyling = css`
  box-sizing: border-box;
  font-size: 3em;
  font-family: 'Montserrat', sans serif;
  font-weight: 600;
  margin-left: 0.5em;
  margin-right: 0.5em;
  min-width: 0;
  max-width: calc(100% - 0.5em);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: no-wrap;
`;

const PlayerOne = styled.div`
  ${PlayerStyling}
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: end;
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

const PlayerTwo = styled.div`
  ${PlayerStyling}
  grid-column-start: 3;
  grid-column-end: 4;
  justify-self: start;
  align-self: end;
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

  closeModal = () => {
    this.setState(
      {
        gameBoard: Array(9).fill(''),
        moveCounter: 1,
        displayModal: false,
        gameResult: '',
      }
    )
  }

  handleClick = (index) => {
    this.storePlayerMove(index);
    this.checkGameOver();
  }

  storePlayerMove = (index) => {
    let newGameBoard = this.state.gameBoard;
    newGameBoard[index] = this.currentPlayer().symbol;

    this.setState({
      gameBoard: newGameBoard,
    })
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
      winConditions.forEach((condition) => {
        const [a, b, c] = condition;
        const values = [gameBoard[a], gameBoard[b], gameBoard[c]];

        if (gameBoard[a] !== '' && values.every(value => value === gameBoard[a])) {
          gameIsOver = true

          this.setState(
            {
              gameResult: 'win',
              displayModal: true,
            }
          );
        };

        if (!gameBoard.includes('') && !gameIsOver) {
          gameIsOver = true

          this.setState(
            {
              displayModal: true,
              gameResult: 'tie'
            }
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
      displayModal,
      gameBoard,
      gameResult,
      playerOne,
      playerTwo,
    } = this.state;

    const squares = gameBoard.map((value, index) => {
      let key = `square_${index}`;

      return(
        <Square
          key={key}
          onClick={() => this.handleClick(index)}
          value={value}
        />
      )
    });

    return (
      <Root>
        <PlayerList>
          <PlayerOne>
            {playerOne.name} (X)
          </PlayerOne>
          <Versus>
            versus
          </Versus>
          <PlayerTwo>
            {playerTwo.name} (O)
          </PlayerTwo>
        </PlayerList>
        <SquareList>
          {squares}
        </SquareList>
        <Modal
          closeModal={this.closeModal}
          displayModal={displayModal}
          gameResult={gameResult}
          currentPlayer={this.currentPlayer()}
        />
      </Root>
    );
  }
}

export default Game;
