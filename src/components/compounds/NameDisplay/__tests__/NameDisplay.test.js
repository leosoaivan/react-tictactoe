import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { createSerializer } from 'enzyme-to-json';
import NameDisplay from '..';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('NameDisplay', () => {
  it('Renders the NameDisplay component with two player names and one \'versus\'', () => {
    const tree = renderer.create(
      <NameDisplay />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children).toHaveLength(3);
  });
});
