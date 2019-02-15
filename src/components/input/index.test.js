import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('Input component', () => {
  const wrapper = shallow(<Input />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
