import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<BodySectionWithMarginBottom />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom>
      <h2>test title</h2>
      <p>test children node</p>
    </BodySectionWithMarginBottom>, {
      context: {
        marginBottom: '10px'
      }
    });

    expect(wrapper.find(BodySection).length).toBe(1);

    expect(wrapper.find(BodySection).prop('marginBottom')).toBe('10px');
  });
  it('renders the logout section when user is logged in', async () => {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
      password: 'password123',
    };
    const { getByText } = render(<App user={user} />);
    const logoutSection = await waitForElement(() => getByText('logout'));
    expect(logoutSection).toBeInTheDocument();
  });

  it('calls the logout function when the link is clicked', async () => {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
      password: 'password123',
    };
    const { getByText, logOut } = render(<App user={user} />);
    const spy = jest.fn();
    const logoutLink = await waitForElement(() => getByText('logout'));
    fireEvent.click(logoutLink);
    expect(logOut).toHaveBeenCalled();
  });

  it('updates the state when logIn function is called', async () => {
    const { getByText, logIn } = render(<App />);
    const spy = jest.fn();
    const logInSpy = jest.fn();
    const email = 'test@example.com';
    const password = 'password123';
    const logInButton = await waitForElement(() => getByText('Login'));
    fireEvent.click(logInButton);
    expect(logIn).toHaveBeenCalled();
    const updatedState = await waitForElement(() => getByText('Welcome, test@example.com!'));
    expect(updatedState).toEqual({
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: true,
    });
  });

  it('updates the state when logOut function is called', async () => {
    const { getByText, logOut } = render(<App />);
    const spy = jest.fn();
    const logOutSpy = jest.fn();
    const email = 'test@example.com';
    const password = 'password123';
    const logOutButton = await waitForElement(() => getByText('Logout'));
    fireEvent.click(logOutButton);
    expect(logOut).toHaveBeenCalled();
    const updatedState = await waitForElement(() => getByText('Welcome, test@example.com!'));
    expect(updatedState).toEqual({
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: false,
    });
  });
});

test('calls the logOut function when the keys control and h are pressed', () => {
  const mockLogOut = jest.fn();
  const { getByText } = render(<App logOut={mockLogOut} />);

  const handleKeyDownSpy = jest.spyOn(window, 'addEventListener');
  const handleKeyDownSpy2 = jest.spyOn(window, 'removeEventListener');

  expect(handleKeyDownSpy).toHaveBeenCalledWith('keydown', expect.anything());
  expect(handleKeyDownSpy2).not.toHaveBeenCalled();

  const keyDownEvent = {
    ctrlKey: true,
    key: 'h',
  };

  userEvent.type(getByText('Log in'), { key: 'Enter' });

  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Control' }));
  window.dispatchEvent(new KeyboardEvent('keydown', keyDownEvent));

  expect(mockLogOut).toHaveBeenCalled();
  expect(screen.getByText('Logging you out')).toBeInTheDocument();

  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Control' }));
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h' }));

  expect(handleKeyDownSpy).toHaveBeenCalledWith('keydown', expect.anything());
  expect(handleKeyDownSpy2).toHaveBeenCalledWith('keydown', mockLogOut);
});

test('default state for displayDrawer is false', () => {
  const { getByState } = render(<App />);
  const displayDrawer = getByState('displayDrawer');
  expect(displayDrawer).toBe(false);
});

test('handleDisplayDrawer updates state to true', () => {
  const { getByState, rerender } = render(<App />);
  const displayDrawer = getByState('displayDrawer');
  expect(displayDrawer).toBe(false);

  const handleDisplayDrawer = jest.fn();
  rerender(<App handleDisplayDrawer={handleDisplayDrawer} />);

  fireEvent.click(getByText('Course list'));
  expect(handleDisplayDrawer).toHaveBeenCalled();
  expect(displayDrawer).toBe(true);
});

test('handleHideDrawer updates state to false', () => {
  const { getByState, rerender } = render(<App />);
  const handleHideDrawer = jest.fn();
  rerender(<App handleHideDrawer={handleHideDrawer} />);

  fireEvent.click(getByText('Log in to continue'));
  expect(handleHideDrawer).toHaveBeenCalled();
  expect(getByState('displayDrawer')).toBe(false);
});
