import jQuery from 'jquery';
import observable from './../dont-peek/ex-6/observable';

class Counter {
  constructor() {
    observable(this);
    this.value = 0;
  }

  getValue = () => this.value;

  increment = () => this.dispatchEvent('valueChanged', ++this.value);
}

jQuery.fn.counterWidget = function(counter) {
  return this.each(function() {
    const widgetRoot = jQuery(this);
    const updateValue = value => widgetRoot.find('.value').text(value);
    updateValue(counter.getValue());
    widgetRoot.find('.increment').click(counter.increment);
    counter.addEventListener('valueChanged', updateValue);
  });
};

export default Counter;
