const __ = 'replace me so that the test is passing';

describe('fat arrow functions', function() {
  test('you understand fat-arrow functions 0', function() {
    const getName = player => {
      return player.name;
    };
    expect(getName({ name: 'Myamoto', age: 23 })).toBe(__);
  });

  test('you understand fat-arrow functions 1', function() {
    const getName = player => player.name;
    expect(getName({ name: 'Myamoto', age: 23 })).toBe(__);
  });

  test('you understand fat-arrow functions 2', function() {
    const getName = player => {
      player.name;
    };
    expect(getName({ name: 'Myamoto', age: 23 })).toBe(__);
  });

  test('you understand fat-arrow functions 3', function() {
    const samurai = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ];
    expect(samurai.map(s => s.name)).toEqual(__);
    expect(samurai.map(s => s.age)).toEqual(__);
  });
});

describe('destructuring', function() {
  test('you understand destructuring 1', function() {
    const player = {
      name: 'Myamoto',
      age: 23
    };
    const { name, age, address } = player;
    expect(name).toBe(__);
    expect(age).toBe(__);
    expect(address).toBe(__);
  });

  test('you understand destructuring 2', function() {
    const player = {
      name: 'Myamoto',
      age: 23
    };
    const getName1 = function(player) {
      return player.name;
    };
    expect(getName1(player)).toBe(__);
    const getName2 = player => player.name;
    expect(getName2(player)).toBe(__);
    const getName3 = function({ name }) {
      return name;
    };
    expect(getName3(player)).toBe(__);
    const getName4 = ({ name }) => name;
    expect(getName4(player)).toBe(__);
  });

  test('you really understand destructuring', function() {
    const samurai = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ];
    expect(samurai.map(({ name }) => name)).toEqual(__);
    expect(samurai.map(({ age }) => age)).toEqual(__);
  });

  test('you understand destructuring arrays', function() {
    const [x, y] = '23_45'.split('_').map(p => parseInt(p, 10));

    expect(x).toBe(__);
    expect(y).toBe(__);
  });
});

test('you understand rest operator 1', function() {
  const sum = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);

  expect(sum(1, 2, 3, 4, 5)).toBe(__);
});

describe('spread operator', function() {
  test('you understand spread operator 1', function() {
    const numbers = [2, 3, 4, 5];
    expect([1, ...numbers, 6]).toEqual(__);
  });
  test('you understand spread operator 2', function() {
    const person = {
      name: 'Myamoto',
      age: 23
    };
    expect({ ...person, weapon: 'Katana' }).toEqual(__);
    expect({ ...person, name: 'Hattori' }).toEqual(__);
    expect({ name: 'Hattori', ...person }).toEqual(__);
  });
  test('you understand spread & destructuring', function() {
    const samurai = {
      name: 'Myamoto',
      age: 23,
      weapon: 'Katana'
    };
    const { weapon, ...person } = samurai;
    expect(person).toEqual(__);
  });
});

test('you understand computed property names', function() {
  const propertyName = 'weapon';
  const person1 = {
    name: 'Myamoto',
    age: 23,
    propertyName: 'Katana'
  };
  expect(person1).toEqual(__);
  const person2 = {
    name: 'Myamoto',
    age: 23,
    [propertyName]: 'Katana'
  };
  expect(person2).toEqual(__);
});
