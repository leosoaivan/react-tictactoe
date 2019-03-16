import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  box-sizing: border-box;
  font-size: 3em;
  font-family: 'Montserrat', sans serif;
  font-weight: 600;
  margin-left: 0.5em;
  margin-right: 0.5em;
  min-width: 0;
  max-width: calc(100% - 0.5em);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: no-wrap;
`;

const PlayerName = ({ className, name, symbol }) => {
  const displayedName = (name ? `${name} (${symbol})` : `(${symbol})`);

  return (
    <Root className={className}>
      {displayedName}
    </Root>
  );
};

PlayerName.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
};

PlayerName.defaultProps = {
  className: null,
  name: '',
  symbol: '',
};

export default PlayerName;
