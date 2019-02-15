import React from 'react';
import { shallow } from 'enzyme';
import BeerDetails from './index';

describe('BeerDetails component', () => {
  const wrapper = shallow(<BeerDetails />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
