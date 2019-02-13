class Welcome {
  constructor(clock) {
    this.clock = clock;
  }
  greet() {
    return this.clock.now().getHours() < 12 ? 'Good morning!' : 'Good afternoon!';
  }
}

describe('using jest stubs', function() {
  let clock;
  let welcome;
  beforeEach(() => {
    clock = { now: jest.fn() };
    welcome = new Welcome(clock);
  });
  it('should greet with Good morning! when before noon', function() {
    clock.now.mockReturnValue(new Date(2020, 3, 25, 9, 0, 0));

    expect(welcome.greet()).toBe('Good morning!');
  });
  it('should greet with Good afternoon! when after noon', function() {
    clock.now.mockReturnValue(new Date(2020, 3, 25, 14, 0, 0));

    expect(welcome.greet()).toBe('Good afternoon!');
  });
});
