import React, { } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Grid from './components/grid';

const Root = styled.div`
`;

const App = () => {
  return(
    <Root>
      <Grid />
    </Root>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
