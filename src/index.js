import React, { } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Game from './components/game';

const Root = styled.div`
`;

const App = () => (
  <Root>
    <Game />
  </Root>
);


ReactDOM.render(<App />, document.querySelector('#root'));
