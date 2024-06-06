import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ, SET_LOADING_STATE } from './actionTypes';
import notificationsNormalizer from './schema/notificationsNormalizer';

const initialState = Map({
  notifications: [],
  filter: 'ALL',
  loading: false,
});

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.payload);
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.payload);
      return state.mergeDeep({
        notifications: fromJS(normalizedData),
        loading: false,
      });
    case SET_TYPE_FILTER:
      return state.set('filter', action.payload);
    case MARK_AS_READ:
      const updatedNotification = state.get('notifications').find(notification => notification.get('_id') === action.payload);
      if (updatedNotification) {
        const updatedIndex = state.get('notifications').indexOf(updatedNotification);
        return state.setIn(['notifications', updatedIndex, 'isRead'], true);
      }
      return state;
    default:
      return state;
  }
}

export default notificationReducer;
