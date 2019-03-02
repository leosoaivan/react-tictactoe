import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Square from '..';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Square', () => {
  it('Renders the Square component', () => {
    const wrapper = render(
      <Square />,
    );

    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
