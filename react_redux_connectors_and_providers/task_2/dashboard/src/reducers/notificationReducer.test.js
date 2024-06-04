import notificationReducer from './notificationReducer';
import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from './actionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(Map({
      notifications: [],
      filter: 'ALL',
    }));
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const normalizedData = [
      { _id: '1', title: 'Notification 1', message: 'This is notification 1', isRead: false },
      { _id: '2', title: 'Notification 2', message: 'This is notification 2', isRead: true },
    ];

    expect(notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: normalizedData,
    })).toEqual(Map({
      notifications: normalizedData,
      filter: 'ALL',
    }));
  });

  it('should handle SET_TYPE_FILTER', () => {
    expect(notificationReducer(Map({
      notifications: [],
      filter: 'ALL',
    }), {
      type: SET_TYPE_FILTER,
      payload: 'UNREAD',
    })).toEqual(Map({
      notifications: [],
      filter: 'UNREAD',
    }));
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      notifications: [
        { _id: '1', title: 'Notification 1', message: 'This is notification 1', isRead: false },
        { _id: '2', title: 'Notification 2', message: 'This is notification 2', isRead: true },
      ],
      filter: 'ALL',
    });

    expect(notificationReducer(initialState, {
      type: MARK_AS_READ,
      payload: '1',
    })).toEqual(Map({
      notifications: [
        { _id: '1', title: 'Notification 1', message: 'This is notification 1', isRead: true },
        { _id: '2', title: 'Notification 2', message: 'This is notification 2', isRead: true },
      ],
      filter: 'ALL',
    }));
  });
});
