import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

const mockState = {
  notifications: {
    filterType: 'ALL',
    entities: [
      { id: 1, message: 'Notification 1', read: true },
      { id: 2, message: 'Notification 2', read: false },
      { id: 3, message: 'Notification 3', read: true },
    ],
  },
};

describe('notificationSelector', () => {
  test('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(mockState)).toBe('ALL');
  });

  test('getNotifications returns a list of the message entities within the reducer', () => {
    const expectedResult = [
      { id: 1, message: 'Notification 1', read: true },
      { id: 2, message: 'Notification 2', read: false },
      { id: 3, message: 'Notification 3', read: true },
    ];
    expect(getNotifications(mockState)).toEqual(expectedResult);
  });

  test('getUnreadNotifications return a list of the message entities within the reducer', () => {
    const expectedResult = [
      { id: 2, message: 'Notification 2', read: false },
    ];
    expect(getUnreadNotifications(mockState)).toEqual(expectedResult);
  });
});
