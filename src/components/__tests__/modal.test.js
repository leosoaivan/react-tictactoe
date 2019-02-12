import React from 'react';
import 'jest-styled-components';
import { shallow, mount } from 'enzyme';
import Modal from '../modal';
import {createSerializer} from 'enzyme-to-json';
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Modal', () => {
  it('Renders a Modal component', () => {
    const wrapper = shallow(
      <Modal
        displayModal={true}
      />,
    );

    expect(wrapper).toHaveLength(1);
    expect(wrapper).toHaveStyleRule('display', 'block');
  });

  it('Renders an invisible Modal component', () => {
    const wrapper = shallow(
      <Modal 
        displayModal={false}
      />,
    );

    expect(wrapper).toHaveLength(1);
    expect(wrapper).toHaveStyleRule('display', 'none');
  });
});
