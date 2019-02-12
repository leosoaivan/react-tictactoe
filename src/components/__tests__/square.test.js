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

    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders the Square component with a value', () => {
    const wrapper = shallow(
      <Square 
        value="X"
      />,
    );

    expect()
  })
});
