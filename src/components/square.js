import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: white;
`;

const Square = ({ onClick, value }) => (
  <Root onClick={onClick}>
    {value}
  </Root>
);

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Square.defaultProps = {
  onClick: null,
  value: null,
};

export default Square;
