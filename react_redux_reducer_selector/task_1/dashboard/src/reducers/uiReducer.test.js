import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './actions/uiActionTypes';

import uiReducer from './uiReducer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, action);
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should change correctly the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer({ isNotificationDrawerVisible: false }, action);
    expect(state.isNotificationDrawerVisible).toBe(true);
  });
});
