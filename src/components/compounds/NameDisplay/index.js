import React from 'react';
import styled from 'styled-components';
import PlayerName from '../../atoms/PlayerName';
import PlayerType from '../../../types/playerPropType';

const Root = styled.div`
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

const NameDisplay = ({ playerOne, playerTwo }) => (
  <Root>
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
  </Root>
);

NameDisplay.propTypes = {
  playerOne: PlayerType,
  playerTwo: PlayerType,
};

NameDisplay.defaultProps = {
  playerOne: {},
  playerTwo: {},
};

export default NameDisplay;
