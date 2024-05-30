import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { useDispath } from 'react-redux';

export const login = (email, password) => ({
  type: LOGIN,
  payload: { user: { email, password } },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const bindUIActionCreators = (dispatch) => ({
  boundLogin: (email, password) => dispatch(login(email, password)),
  boundLogout: () => dispatch(logout()),
  boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer())
});
