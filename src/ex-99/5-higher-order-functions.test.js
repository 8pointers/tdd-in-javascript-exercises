const __ = 'replace me so that the test is passing';

test('everything is setup correctly', function() {
  expect(1).toBe(__);
});

test('familiar with normal functions', function() {
  const add = function(a, b) {
    return a + b;
  };

  expect(add(12, 34)).toBe(__);
});

test('familiar with fat-arrow functions', function() {
  const add = (a, b) => a + b;

  expect(add(12, 34)).toBe(__);
});

test('familiar with partial application', function() {
  const add = function(a, b) {
    return a + b;
  };
  const whatDoesThisFunctionDo = add.bind(undefined, 1);

  expect(whatDoesThisFunctionDo(123)).toBe(__);
});

test('familiar with higher-order functions 1', function() {
  const add = function(a) {
    return function(b) {
      return a + b;
    };
  };

  expect(add(12)(34)).toBe(__);
});

test('familiar with higher-order functions 2', function() {
  const add = function(a) {
    return function(b) {
      return a + b;
    };
  };
  const whatDoesThisFunctionDo = add(1);

  expect(whatDoesThisFunctionDo(123)).toBe(__);
});

test('familiar with higher-order functions 3', function() {
  const add = a => b => a + b;
  const whatDoesThisFunctionDo = add(1);

  expect(whatDoesThisFunctionDo(123)).toBe(__);
});

test('bmi', function() {
  const bmi = height => weight => weight / (height * height);
  const bmiPeter = bmi(1.75);
  const bmiPaul = bmi(1.85);

  expect(bmiPeter(75)).toBe(__);
  expect(bmiPeter(65)).toBe(__);
  expect(bmiPaul(85)).toBe(__);
  expect(bmiPaul(75)).toBe(__);
  expect(bmi(1.8)(80)).toBe(__);
});
