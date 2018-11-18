import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Grid>
      </Grid>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));