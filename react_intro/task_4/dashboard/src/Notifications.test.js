import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  render(<Notifications />);
});

test('Notifications renders three list items', () => {
  const { container } = render(<Notifications />);
  const listItems = container.querySelectorAll('li');
  expect(listItems.length).toBe(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
  const { getByText } = render(<Notifications />);
  const notificationText = getByText(/Here is the list of notifications/i);
  expect(notificationText).toBeInTheDocument();
});
