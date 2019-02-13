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
  test('should have 0 as initial value', function() {
    expect(counter.getValue()).toBe(0);
  });
  test('should increment value by 1 when increment method is invoked', function() {
    counter.increment();

    expect(counter.getValue()).toBe(1);
  });
  test('should dispatch valueChanged event when counter is incremented', function() {
    counter.increment();

    expect(valueChangedListener).toHaveBeenCalledWith(1);
  });
});

describe('Counter Widget', function() {
  let counter;
  let widget;
  beforeEach(function() {
    counter = observable({
      getValue: () => 0,
      increment: jest.fn().mockName('increment')
    });
    widget = jQuery('body')
      .empty()
      .append(
        `<div>
          <input type='button' class='increment' value='increment'></input>
          <span class='value'></span>
        </div>`
      )
      .counterWidget(counter);
  });
  test('should initially show the counter value', function() {
    expect(widget.find('.value').text()).toBe('0');
  });
  test('should call increment method when increment button is clicked', function() {
    widget.find('.increment').click();

    expect(counter.increment).toHaveBeenCalled();
  });
  test('should update the value in DOM when valueChanged event is dispatched', function() {
    counter.dispatchEvent('valueChanged', 123);

    expect(widget.find('.value').text()).toBe('123');
  });
});
