import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducer';

let Counter = ({ value, onIncrement }) => (
  <p>
    <button onClick={onIncrement}>Increment</button> {value}
  </p>
);
Counter = connect(
  state => ({ value: state.value }),
  dispatch => ({ onIncrement: () => dispatch({ type: 'INCREMENT' }) })
)(Counter);

const store = createStore(reducer, { value: 0 });

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root-ex-8-counter')
);
