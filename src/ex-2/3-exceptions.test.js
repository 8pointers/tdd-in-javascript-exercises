const getName = playerJson => {
  const player = JSON.parse(playerJson);
  return player.name;
};

describe('Matching exceptions', function() {
  it('should understand toThrowError', function() {
    expect(getName('{"name": "Myamoto"}')).toBe('Myamoto');
    expect(() => getName('{')).toThrowError(new SyntaxError('Unexpected end of JSON input'));
  });
});
