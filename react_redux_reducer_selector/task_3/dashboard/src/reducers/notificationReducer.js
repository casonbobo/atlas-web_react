import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'all',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
       ...state,
        notifications: action.payload,
      };
    case MARK_AS_READ:
      return {
       ...state,
        notifications: [
         ...state.notifications.slice(0, action.payload),
          {...state.notifications[action.payload], isRead: true },
         ...state.notifications.slice(action.payload + 1),
        ],
      };
    case SET_TYPE_FILTER:
      return {
       ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default notificationReducer;
