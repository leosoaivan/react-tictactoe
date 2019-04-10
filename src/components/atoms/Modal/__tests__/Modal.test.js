import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { createSerializer } from 'enzyme-to-json';
import Modal from '..';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Modal', () => {
  it('Renders a Modal component', () => {
    const tree = renderer.create(
      <Modal
        displayModal
      />,
    ).toJSON();

    expect(tree).toHaveStyleRule('display', 'block');
  });

  it('Renders an invisible Modal component', () => {
    const tree = renderer.create(
      <Modal
        displayModal={false}
      />,
    ).toJSON();

    expect(tree).toHaveStyleRule('display', 'none');
  });
});
