const anotherReducerCombinator = reducers => (state, action) => {
  const reducer = reducers[action.type];
  return (reducer && reducer(state, action)) || state;
};
it('should pick the right strategy based on event type', function() {
  const reducer = anotherReducerCombinator({
    INCREMENT: state => state + 1,
    DECREMENT: state => state - 1,
    MULTIPLY: (state, action) => state * action.multiplier
  });
  expect(reducer(123, { type: 'INCREMENT' })).toBe(124);
  expect(reducer(123, { type: 'DECREMENT' })).toBe(122);
  expect(reducer(123, { type: 'MULTIPLY', multiplier: 3 })).toBe(123 * 3);
  expect(reducer(123, { type: 'UNKNOWN' })).toBe(123);
});
