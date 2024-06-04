import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';
export const MARK_AS_READ = 'MARK_AS_READ';
export const SET_TYPE_FILTER = 'SET_TYPE_FILTER';
export const NotificationTypeFilters = {
  DEFAULT: 'default',
  URGENT: 'urgent',
};

export const fetchNotificationsSuccess = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications.map(notification => ({...notification, isRead: false })),
});

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  payload: index,
});

export const setTypeFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  payload: filter,
});
