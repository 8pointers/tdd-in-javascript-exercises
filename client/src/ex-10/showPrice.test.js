import jQuery from 'jquery';
import showPrice from './showPrice';

describe('showPrice', function() {
  let domElement;
  let updatePrice;
  beforeEach(function() {
    document.body.innerHTML = '';
    domElement = document.createElement('div');
    document.body.append(domElement);
    updatePrice = showPrice(domElement);
  });
  test('should update the price in DOM when invoked', function() {
    updatePrice(123.45);

    expect(domElement.innerText).toBe(123.45);
  });
});
