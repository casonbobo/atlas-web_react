import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsRead = (notificationId) => ({
  type: MARK_AS_READ,
  payload: { notificationId },
});

export const setTypeFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  payload: { filter },
});
