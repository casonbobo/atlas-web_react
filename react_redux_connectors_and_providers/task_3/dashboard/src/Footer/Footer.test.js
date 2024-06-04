import React from 'eact';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer year={2022} copy="© My School" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct year and copy', () => {
    const wrapper = shallow(<Footer year={2022} copy="© My School" />);
    expect(wrapper.text()).toContain('© My School 2022');
  });
});
