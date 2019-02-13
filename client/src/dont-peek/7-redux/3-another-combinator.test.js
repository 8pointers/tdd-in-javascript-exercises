const anotherReducerCombinator = reducers => (state, action) => {
  const reducer = reducers[action.type];
  return (reducer && reducer(state, action)) || state;
};

const reducer = anotherReducerCombinator({
  INCREMENT: state => state + 1,
  DECREMENT: state => state - 1,
  MULTIPLY: (state, action) => state * action.multiplier
});

console.log(reducer(123, { type: 'INCREMENT' }));
console.log(reducer(123, { type: 'DECREMENT' }));
console.log(reducer(123, { type: 'MULTIPLY', multiplier: 3 }));
console.log(reducer(123, { type: 'UNKNOWN' }));
