import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { useDispath } from 'react-redux';


export const markAsRead = (notificationId) => ({
  type: MARK_AS_READ,
  payload: notificationId,
});

export const setTypeFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  payload: filter,
});

export const bindNotificationActionCreators = (dispatch) => ({
  boundMarkAsRead: (notificationId) => dispatch(markAsRead(notificationId)),
  boundTypeFilter: (filter) => dispatch(setTypeFilter(filter))
});
