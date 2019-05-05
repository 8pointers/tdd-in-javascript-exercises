const __ = 'replace me so that the test is passing';

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
