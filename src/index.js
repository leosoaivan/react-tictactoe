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
    }
  }

  componentDidMount() {
    let playerOne = this.playerFactory(1, 'X', 'X');
    let playerTwo = this.playerFactory(2, 'O', 'O');
    this.setState({playerOne: playerOne, playerTwo: playerTwo})
  }

  playerFactory = (int, symbol, imgsrc) => {
    let playerName = prompt(`You are Player ${int}. What is your name?`, `Player ${int}`);
    
    return {
      symbol,
      playerName,
      imgsrc,
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