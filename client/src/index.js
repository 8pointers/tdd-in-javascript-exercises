import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './ex-6/counter';
import GameOfLife from './dont-peek/ex-6/game-of-life';
import './ex-8/counter';

ReactDOM.render(<App />, document.getElementById('root'));
jQuery('#counterWidget').counterWidget(new Counter());
jQuery('#gameOfLifeWidget').gameOfLifeWidget(new GameOfLife(), 10, 10, 250);
