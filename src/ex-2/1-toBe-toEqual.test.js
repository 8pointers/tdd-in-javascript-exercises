describe('Matching objects', function() {
  it('should understand the difference between .toBe and .toEqual', function() {
    const person1 = { name: 'Myamoto', age: 23, address: { street: 'Samurai Way', postcode: 'GU-XXX' } };
    const person2 = person1;
    const person3 = { name: 'Myamoto', age: 23, address: { street: 'Samurai Way', postcode: 'GU-XXX' } };
    const person4 = { name: 'Hattori', age: 34, address: { street: 'Ninja Way', postcode: 'GU-YYY' } };

    expect(person1).toBe(person2);
    expect(person1).not.toBe(person3); //.not!!!
    expect(person1).toEqual(person3);
    expect(person1).not.toEqual(person4);
  });
});
