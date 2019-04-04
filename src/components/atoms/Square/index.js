import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LetterX from '../../../images/Letter-X.png';
import LetterO from '../../../images/Letter-O.png';

const Root = styled.div`
  background: white;
  height: 100%;
  width: 100%;
`;

const Symbol = styled.img`
  box-sizing: border-box;
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  padding: 5px;
`;

const Square = ({ onClick, value }) => {
  const symbol = () => {
    if (value === 'X') {
      return <Symbol src={LetterX} alt="" />;
    }

    if (value === 'O') {
      return <Symbol src={LetterO} alt="" />;
    }

    return null;
  };

  return (
    <Root onClick={onClick}>
      {symbol()}
    </Root>
  );
};

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Square.defaultProps = {
  onClick: null,
  value: null,
};

export default Square;
