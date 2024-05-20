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
