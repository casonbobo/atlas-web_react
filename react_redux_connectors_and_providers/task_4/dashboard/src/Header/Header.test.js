import React from 'eact';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false, email: '' }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the logout section when the user is logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'john.doe@example.com' }} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('john.doe@example.com');
  });

  it('does not render the logout section when the user is not logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false, email: '' }} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });
});
