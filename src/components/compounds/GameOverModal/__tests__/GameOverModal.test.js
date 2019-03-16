import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import GameOverModal from '..';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('GameOverModal', () => {
  it('Renders an invisible GameOverModal by default', () => {
    const tree = renderer.create(
      <GameOverModal />,
    ).toJSON();

    expect(tree).toHaveStyleRule('display', 'none');
    expect(tree).toMatchSnapshot();
  });

  it('Renders with a winning message', () => {
    const wrapper = shallow(
      <GameOverModal
        displayModal
        gameResult="win"
      />,
    );

    expect(wrapper.prop('modalHeader')).toMatch('Congratulations');
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders with a losing message', () => {
    const wrapper = shallow(
      <GameOverModal
        displayModal
        gameResult="loss"
      />,
    );

    expect(wrapper.prop('modalHeader')).not.toMatch('Congratulations');
    expect(wrapper).toMatchSnapshot();
  });

  it('Initiates onClick callback', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <GameOverModal
        displayModal
        onClick={onClickMock}
      />,
    );

    expect(onClickMock).toHaveBeenCalledTimes(0);
    wrapper.dive().find('CloseButton').simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
