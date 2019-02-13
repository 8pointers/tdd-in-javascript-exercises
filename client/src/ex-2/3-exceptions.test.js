const getName = playerJson => {
  const player = JSON.parse(playerJson);
  return player.name;
};

describe('more matchers', function() {
  it('should understand toThrowError', function() {
    expect(getName('{"name": "Myamoto"}')).toBe('Myamoto');
    expect(() => getName('{')).toThrowError(new SyntaxError('Unexpected end of JSON input'));
  });
});
