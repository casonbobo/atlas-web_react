import rootReducer from './reducers';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      courses: new Map(),
      notifications: new Map(),
      ui: new Map(),
    });
  });
});
