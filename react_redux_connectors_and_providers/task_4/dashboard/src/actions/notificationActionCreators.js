import {SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS} from './notificationActionTypes';

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

export const fetchNotifications = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await fetch('/notifications.json');
    if (!response.ok) {
      throw new Error('Failed to fetch notifications');
    }
    const data = await response.json();
    dispatch(setNotifications(data));
  } catch (error) {
    console.error('Error fetching notifications:', error);
  } finally {
    dispatch(setLoadingState(false));
  }
};
