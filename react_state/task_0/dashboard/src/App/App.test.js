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

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('default state for displayDrawer is false', () => {
  const { getByState } = render(<App />);
  const displayDrawer = getByState('displayDrawer');
  expect(displayDrawer).toBe(false);
});

test('verify that the default state for displayDrawer is false, then true after calling handleDisplayDrawer', () => {
  expect(wrapper.state('displayDrawer')).toBe(false);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state('displayDrawer')).toBe(true);
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
