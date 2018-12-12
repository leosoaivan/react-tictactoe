import React from 'react';
import 'jest-styled-components';
import { shallow, mount, render } from 'enzyme';
import Square from '../square';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Square', () => {
  it('Renders the Square component', () => {
    const wrapper = render(
      <Square></Square>
    )

    expect(wrapper).toMatchSnapshot();
  })

  it('Handles clicks from players', () => {
    const mockOnPlayerClick = jest.fn();
    const player = {
      symbol: "X"
    }
    const wrapper = shallow(
      <Square
        onPlayerClick={mockOnPlayerClick}
        currentPlayer={player}>
      </Square>
    )
    
    wrapper.simulate('click')
    expect(mockOnPlayerClick).toHaveBeenCalledTimes(1);
    expect(wrapper.dive().find('StyledComponent').children().text()).toEqual('X')
  })
})