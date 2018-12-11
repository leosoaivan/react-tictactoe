import React from 'react';
import { shallow } from 'enzyme';
import Square from '../square';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Square', () => {
  it('Renders the Square component', () => {
    const wrapper = shallow(
      <Square></Square>
    )

    expect(wrapper).toMatchSnapshot();
  })
})