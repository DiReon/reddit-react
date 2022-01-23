import React from 'react';
import {shallow} from 'enzyme';
import {Dropdown} from '../Dropdown';

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown button={<button/>} children={<div/>} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })
})
