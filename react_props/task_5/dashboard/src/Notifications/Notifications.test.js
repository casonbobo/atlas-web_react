import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />, { context: {} });
  });

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders three list items', () => {
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});

test('renders correctly if no listNotifications is passed', () => {
  render(<Notifications />);
  const noNotificationMessage = screen.getByText('No new notification for now');
  expect(noNotificationMessage).toBeInTheDocument();
});

test('renders correctly if an empty array is passed', () => {
  render(<Notifications listNotifications={[]} />);
  const noNotificationMessage = screen.getByText('No new notification for now');
  expect(noNotificationMessage).toBeInTheDocument();
});

test('renders correctly if a list of notifications is passed', () => {
  const notifications = [
    getLatestNotification('New course available'),
    getLatestNotification('New challenge available'),
    getLatestNotification('New challenge available'),
  ];
  render(<Notifications listNotifications={notifications} />);
  const notificationItems = screen.getAllByTestId('notification-item');
  expect(notificationItems.length).toBe(3);
});
