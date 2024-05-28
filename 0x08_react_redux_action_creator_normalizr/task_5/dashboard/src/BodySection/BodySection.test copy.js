import React from 'react';
import { shallow } from 'enzyme';
import BodySection from '../../BodySection';

describe('<BodySection />', () => {
  it('should render correctly the children and one h2 element', () => {
    const wrapper = shallow(<BodySection>
      <h2>test title</h2>
      <p>test children node</p>
    </BodySection>);

    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('test title');

    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
