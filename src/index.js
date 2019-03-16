import React, { } from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

const App = () => (
  <Game />
);

ReactDOM.render(<App />, document.querySelector('#root'));
