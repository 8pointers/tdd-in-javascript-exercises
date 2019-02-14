// prettier-ignore
const combineReducers = reducerMap => (state, action) => Object.keys(reducerMap).reduce(
  (newState, propertyName) => ({
    ...newState,
    [propertyName]: reducerMap[propertyName](state && state[propertyName], action)
  }),
  {}
);
