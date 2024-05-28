// courseActionCreators.test.js
import { selectCourse, unSelectCourse } from './courseActionCreators';

test('selectCourse action creator returns correct action', () => {
  const action = selectCourse(1);
  expect(action.type).toBe('SELECT_COURSE');
  expect(action.payload).toBe(1);
});

test('unSelectCourse action creator returns correct action', () => {
  const action = unSelectCourse(1);
  expect(action.type).toBe('UNSELECT_COURSE');
  expect(action.payload).toBe(1);
});
