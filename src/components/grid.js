import React from 'react';
import styled from 'styled-components';
import Square from './square';

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

const Grid = ({currentPlayer, playRound, storePlayerMove}) => {
  const squares = [...Array(9).keys()].map((index) => {
    return(
      <Square
        key={index}
        boardIndex={index}
        currentPlayer={currentPlayer}
        playRound={playRound}
        storePlayerMove={storePlayerMove} />
    )
  })

  return(
    <SquareList>
      {squares}
    </SquareList>
  )
}

export default Grid;