import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { useDispath } from 'react-redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  payload: index
});

export const unselectCourse = (index) => ({
  type: UNSELECT_COURSE,
  payload: index
});

export const bindCourseActionCreators = (dispatch) => ({
  boundSelectCourse: (index) => dispatch(selectCourse(index)),
  boundUnselectCourse: (index) => dispatch(unselectCourse(index))
});
