import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
  
  test('verify that the contact link is not displayed when the user is logged out within the context', () => {
    contextValue = {
      user: {
          email: 'test@example.com',
          password: '',
          isLoggedIn: false
      },
    };
    wrapper = mount(
        <AppContext.Provider value={contextValue}>
            <Footer />
        </AppContext.Provider>
    );
    expect(wrapper.find('.contact-us').exists()).toBe(false);
  });

  test('verify that the contact link is displayed when the user is logged in within the context', () => {
    contextValue = {
      user: {
          email: 'test@example.com',
          password: '',
          isLoggedIn: true
      },
    };
    wrapper = mount(
        <AppContext.Provider value={contextValue}>
            <Footer />
        </AppContext.Provider>
    );
    expect(wrapper.find('.contact-us').exists()).toBe(true);
  });
});
