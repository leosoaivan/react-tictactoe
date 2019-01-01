import React from 'react';
import 'jest-styled-components';
import { render, shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Square from '../square';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Square', () => {
  it('Renders the Square component', () => {
    const wrapper = render(
      <Square />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Handles clicks from players', () => {
    const mockOnPlayerClick = jest.fn();
    const player = {
      symbol: 'X',
    };
    const wrapper = shallow(
      <Square
        onPlayerClick={mockOnPlayerClick}
        currentPlayer={player}
      />,
    );

    wrapper.simulate('click');
    expect(mockOnPlayerClick).toHaveBeenCalledTimes(1);
    expect(wrapper.children().text()).toEqual('X');
  });
});
