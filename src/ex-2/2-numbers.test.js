describe('more matchers', function() {
  it('should understand number-related matchers', function() {
    const i3 = Math.sqrt(-9);
    expect(i3 === NaN).toBe(false);
    expect(isNaN(i3)).toBe(true);
    expect(isNaN(undefined)).toBe(true); //because javascript
    expect(Number.isNaN(undefined)).toBe(false);
    expect(Number.isNaN(i3)).toBe(true);
    expect(Math.sqrt(-9)).toBeNaN();

    expect(0.1 + 0.2).not.toBe(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 10);
  });
});
