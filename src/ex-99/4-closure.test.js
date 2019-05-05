const __ = 'replace me so that the test is passing';

describe('closure', function() {
  test('should understand closure 1', function() {
    const name = 'Hattori';
    const f = function() {
      expect(name).toBe(__);
    };
    f();
  });
  test('should understand closure 2', function() {
    let name = 'Hattori';
    const before = function() {
      expect(name).toBe(__);
    };
    const after = function() {
      expect(name).toBe(__);
    };
    before();
    name = 'Myamoto';
    after();
  });
  test('should understand closure 3', function() {
    const samuraiBuilder = name => ({
      getName: () => name
    });
    const myamoto = samuraiBuilder('Myamoto');
    const hattori = samuraiBuilder('Hattori');
    expect(myamoto.getName()).toBe(__);
    expect(hattori.getName()).toBe(__);
  });
  test('should understand closure 4', function() {
    const samuraiBuilder = name => ({
      getName: () => name,
      setName: newName => (name = newName)
    });
    const samurai = samuraiBuilder('Myamoto');
    expect(samurai.getName()).toBe(__);
    samurai.setName('Hattori');
    expect(samurai.getName()).toBe(__);
  });
  test('should understand closure 5', function() {
    const callbacks = [];
    for (var i = 0; i < 5; i++) {
      callbacks[i] = () => i;
    }
    const thirdCallback = callbacks[2];
    expect(thirdCallback()).toBe(__);
  });
  test('should understand closure 6', function() {
    const callbacks = [];
    for (let i = 0; i < 5; i++) {
      callbacks[i] = () => i;
    }
    const thirdCallback = callbacks[2];
    expect(thirdCallback()).toBe(__);
  });
  test('should understand closure 7', function() {
    const callbacks = [];
    for (var i = 0; i < 5; i++) {
      (i => (callbacks[i] = () => i))(i);
    }
    const thirdCallback = callbacks[2];
    expect(thirdCallback()).toBe(__);
  });
  test('should understand closure 8', function() {
    const callbacks = Array.from({ length: 5 }, (_, i) => () => i);
    const thirdCallback = callbacks[2];
    expect(thirdCallback()).toBe(__);
  });
});
