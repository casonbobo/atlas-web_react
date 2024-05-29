import { courseReducer } from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from './courseActions';

describe('courseReducer', () => {
  it('should return the default state: an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should return the data passed when FETCH_COURSE_SUCCESS is dispatched', () => {
    const courses = [{ id: 1, title: 'Course 1' }];
    const state = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      payload: courses,
    });
    expect(state).toEqual(courses);
  });

  it('should return the data with the right item updated when SELECT_COURSE is dispatched', () => {
    const courses = [{ id: 1, title: 'Course 1' }, { id: 2, title: 'Course 2' }];
    const state = courseReducer(courses, {
      type: SELECT_COURSE,
      payload: 1,
    });
    expect(state[0].isSelected).toBe(true);
    expect(state[1].isSelected).toBe(false);
  });

  it('should return the data with the right item updated when UNSELECT_COURSE is dispatched', () => {
    const courses = [{ id: 1, title: 'Course 1', isSelected: true }];
    const state = courseReducer(courses, {
      type: UNSELECT_COURSE,
      payload: 1,
    });
    expect(state[0].isSelected).toBe(false);
  });
});
