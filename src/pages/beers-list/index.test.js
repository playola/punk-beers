import React from 'react';
import { shallow } from 'enzyme';
import BeersList from './index';

describe('BeersList component', () => {
  const wrapper = shallow(<BeersList />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
