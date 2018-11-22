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
      gameBoardValue: Array(9).fill(''),
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

  render() {
    return(
      <Root>
        <Grid>
        </Grid>
      </Root>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));