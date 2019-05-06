const __ = 'replace me so that the test is passing';

describe('function invocation patterns', function () {
  it('should understand invocation pattern for normal functions', function () {
    const self = this;
    let thisWas;
    const setName = function (name) {
      thisWas = this;
      this.name = name;
    };

    try {
      setName('First');
    } catch (e) {
      expect(e).toEqual(__);
    }
    expect(thisWas).toBe(__);
    expect(self.name).toBe(__);

    const person1 = {
      name: 'Second',
      setName: setName
    };
    person1.setName('Third');
    expect(thisWas).toBe(__);
    expect(person1.name).toBe(__);
    expect(self.name).toBe(__);
    const sn = person1.setName;
    try {
      sn('Third2');
    } catch (e) {
      expect(e).toEqual(__);
    }
    expect(thisWas).toBe(__);


    const person2 = new setName('Fourth');
    expect(thisWas).toBe(__);
    expect(person2.name).toBe(__);
    expect(self.name).toBe(__);

    const person3 = {};
    setName.call(person3, 'Fifth');
    expect(thisWas).toBe(__);
    expect(person3.name).toBe(__);
    expect(self.name).toBe(__);
  });
  it('should understand invocation pattern for fat-arrow functions', function () {
    const self = this;
    let thisWas;
    const setName = name => {
      thisWas = this;
      this.name = name;
    };

    setName('First');
    expect(thisWas).toBe(__);
    expect(self.name).toBe(__);

    const person1 = {
      name: 'Second',
      setName: setName
    };
    person1.setName('Third');
    expect(thisWas).toBe(__);
    expect(person1.name).toBe(__);
    expect(self.name).toBe(__);

    try {
      const person2 = new setName('Fourth');
      // expect(thisWas).toBe(__);
      // expect(person2.name).toBe(__);
      // expect(self.name).toBe(__);
    } catch (e) {
      expect(e).toEqual(__);
    }

    const person3 = {};
    setName.call(person3, 'Fifth');
    expect(thisWas).toBe(__);
    expect(person3.name).toBe(__);
    expect(self.name).toBe(__);
  });
});

class Person {
  setName(name) {
    this.name = name;
  }
}
test('you understand methods', function() {
  const p = new Person();
  expect(p.name).toBe(__);
  p.setName('Myamoto');
  expect(p.name).toBe(__);
});
test('you understand methods 2', function() {
  const p = new Person();
  const setName = p.setName;
  expect(typeof setName).toBe(__);
  try {
    setName('Myamoto');
  } catch (e) {
    // expect(e).toEqual(__);
  } finally {
    expect(p.name).toBe(__);
  }
});
