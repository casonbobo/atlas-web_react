import { markAsRead, setTypeFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  it('should create a markAsRead action', () => {
    const notificationId = 123;
    const expectedAction = {
      type: MARK_AS_READ,
      payload: { notificationId },
    };
    expect(markAsRead(notificationId)).toEqual(expectedAction);
  });

  it('should create a setTypeFilter action', () => {
    const filter = 'unread';
    const expectedAction = {
      type: SET_TYPE_FILTER,
      payload: { filter },
    };
    expect(setTypeFilter(filter)).toEqual(expectedAction);
  });
});
