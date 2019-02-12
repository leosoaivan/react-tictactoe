import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: white;
`;

const Square = ({
  onClick, value
}) => {

  return(
    <Root onClick={onClick}>
      {value}
    </Root>
  )
};

Square.propTypes = {
  boardIndex: PropTypes.number,
  onPlayerClick: PropTypes.func,
  currentPlayer: PropTypes.objectOf(PropTypes.string),
};

Square.defaultProps = {
  boardIndex: undefined,
  onPlayerClick: () => {},
  currentPlayer: {},
};

export default Square;
