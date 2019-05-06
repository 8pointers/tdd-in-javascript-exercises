const __ = 'replace me so that the test is passing';

describe('arrays', function() {
  test('should understand Array.from', function() {
    expect(Array.from('Myamoto')).toEqual(__);
    expect(Array.from({ length: 10 }, (_, i) => i * 2)).toEqual(__);
  });
  test('should understand Array.prototype.map', function() {
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.map(s => s.age).map(n => n + 1)).toEqual(__);
  });
  test('should understand Array.prototype.map 2', function() {
    Array.prototype.myMap = function(fn) {
      //TODO implement without using any of the Array.prototype.methods
    };
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.myMap(s => s.age).myMap(n => n + 1)).toEqual([24, 35, 46]);
  });
  test('should understand Array.prototype.filter', function() {
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.filter(s => s.age > 30)).toEqual(__);
  });
  test('should understand Array.prototype.filter 2', function() {
    Array.prototype.myFilter = function(fn) {
      //TODO implement without using any of the Array.prototype.methods
    };
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.myFilter(s => s.age > 30)).toEqual([{ name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }]);
  });
  test('should understand Array.prototype.reduce 1', function() {
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.reduce((acc, s) => acc + s.age, 0)).toEqual(__);
  });
  test('should understand Array.prototype.reduce 2', function() {
    Array.prototype.myReduce = function(fn, acc) {
      //TODO implement without using any of the Array.prototype.methods
    };
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.myReduce((acc, s) => acc + s.age, 0)).toEqual(__);
  });
  test('should understand Array.prototype.reduce 3', function() {
    const arr = [1, 5, 2, 3, 5, 1, 3, 1, 4];
    const min = arr => 'Implement me!';
    const max = arr => 'Implement me!';
    const sum = arr => 'Implement me!';
    const product = arr => 'Implement me!';
    const count = arr => 'Implement me!';
    expect(min(arr)).toBe(1);
    expect(max(arr)).toBe(5);
    expect(sum(arr)).toBe(25);
    expect(product(arr)).toBe(1800);
    expect(count(arr)).toEqual({ '1': 3, '2': 1, '3': 2, '4': 1, '5': 2 });
  });
  test('should understand Array.prototype.reduce myMap', function() {
    Array.prototype.myMap = function(fn) {
      //TODO implement using Array.prototype.reduce so that the test is passing
    };
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.myMap(s => s.age).map(n => n + 1)).toEqual([24, 35, 46]);
  });
  test('should understand Array.prototype.reduce myFilter', function() {
    Array.prototype.myFilter = function(fn) {
      //TODO implement using Array.prototype.reduce so that the test is passing
    };
    const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }];
    expect(samurai.myFilter(s => s.age > 30)).toEqual([{ name: 'Hattori', age: 34 }, { name: 'Shimazo', age: 45 }]);
  });
});
