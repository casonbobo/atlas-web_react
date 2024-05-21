import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from '@testing-library/jest-dom/extend-expect';
import Header from './Header';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

test('renders Header component without crashing', () => {
  render(<Header />);
});

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('renders the welcome message when user is logged in', async () => {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
      password: 'password123',
    };
    const { getByText } = render(<Header user={user} />);
    const welcomeMessage = await waitForElement(() => getByText('Welcome test@example.com'));
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the logout section when user is logged in', async () => {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
      password: 'password123',
    };
    const { getByText } = render(<Header user={user} />);
    const logoutSection = await waitForElement(() => getByText('logout'));
    expect(logoutSection).toBeInTheDocument();
  });

  it('calls the logout function when the link is clicked', async () => {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
      password: 'password123',
    };
    const { getByText, logOut } = render(<Header user={user} />);
    const spy = jest.fn();
    const logoutLink = await waitForElement(() => getByText('logout'));
    fireEvent.click(logoutLink);
    expect(logOut).toHaveBeenCalled();
  });
});
