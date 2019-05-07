const samurai = host => {
  let name;
  host.setName = function(newName) {
    name = newName;
  };
  host.getName = function() {
    return name;
  };
  return host;
};

describe('Mixins', function() {
  it('should work', function() {
    const s1 = samurai({});
    s1.setName('Myamoto');
    expect(s1.getName()).toBe('Myamoto');
  });
});
