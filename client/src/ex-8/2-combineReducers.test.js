import { createStore } from 'redux';

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};
const visibility = (state = true, action) => {
  if (action.type === 'TOGGLE') {
    return !state;
  }
  return state;
};

const app = (state = {}, action) => {
  return {
    counter: counter(state.counter, action),
    visibility: visibility(state.visibility, action)
  };
};

const store = createStore(app);
store.subscribe(() => console.log('State changed', store.getState()));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'TOGGLE' });
