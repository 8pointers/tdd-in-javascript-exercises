import jQuery from 'jquery';
import Counter from './counter';
import observable from '../dont-peek/ex-6/observable';

describe('Counter', function() {
  let counter;
  let valueChangedListener;
  beforeEach(function() {
    counter = new Counter();
    valueChangedListener = jest.fn().mockName('valueChangedListener');
    counter.addEventListener('valueChanged', valueChangedListener);
  });
  test('should dispatch valueChanged event when counter is incremented', function() {
    counter.increment();

    expect(valueChangedListener).toHaveBeenCalledWith(1);
  });
});

// prettier-ignore
describe('Counter Widget', function() {
  let counter;
  let widget;
  beforeEach(function() {
    counter = observable({
      increment: jest.fn().mockName('increment')
    });
    widget = jQuery('body')
      .append(`<div id='gameOfLifeWidget'>
          <table class='grid'>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </table>
          <input type='button' class='tick' value='tick'></input>
        </div>`)
      .gameOfLifeWidget(gameOfLife, 10, 10);
  });
  test('should call tick method when tick button is clicked', function() {
    widget.find('.tick').click();

    expect(gameOfLife.tick).toHaveBeenCalled();
  });
  test('should call toggleCellState method when a table cell is clicked', function() {
    widget.find('.grid tr:nth-child(4) td:nth-child(5)').click();

    expect(gameOfLife.toggleCellState).toHaveBeenCalledWith(3, 4);
  });
  test('should add class alive when cell becomes alive', function() {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
  });
  test('should remove class alive when cell dies', function() {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, false);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
  });
});
