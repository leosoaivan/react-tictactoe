import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { createSerializer } from 'enzyme-to-json';
import PlayerName from '..';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('PlayerName', () => {
  it('Renders a PlayerName component with a name', () => {
    const tree = renderer.create(
      <PlayerName name="Player One" symbol="X" />,
    ).toJSON();
    const displayedName = tree.children[0];

    expect(tree).toMatchSnapshot();
    expect(displayedName).toEqual('Player One (X)');
  });

  it('Renders a PlayerName component without a name', () => {
    const tree = renderer.create(
      <PlayerName symbol="X" />,
    ).toJSON();
    const displayedName = tree.children[0];

    expect(tree).toMatchSnapshot();
    expect(displayedName).toEqual('(X)');
  });
});
