import { createSelector } from 'eselect';

export const filterTypeSelected = state => state.notification.get('filter');

export const getNotifications = state => state.notification.get('notifications');

export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications => notifications.filter(notification =>!notification.isRead),
);
