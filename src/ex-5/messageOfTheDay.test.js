import MessageOfTheDay from './messageOfTheDay';

describe('MessageOfTheDay', function() {
  const messages = [
    'They don’t make bugs like Bunny anymore.',
    'Talk is cheap. Show me the code.',
    'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    'In theory, theory and practice are the same. In practice, they’re not.',
    'Good design adds value faster than it adds cost.'
  ];
  it('should return a random message from the specified array of messages.', function() {
    const stubRng = {
      getNumber(min, max) {
        return this.nextNumber;
      }
    };
    const motd = new MessageOfTheDay(messages, stubRng);
    stubRng.nextNumber = 3;

    expect(motd.getMessage()).toBe(
      'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.'
    );
  });

  it('should make sure that every message could be returned', function() {
    const mockRng = {
      getNumber(min, max) {
        this.getNumber.toHaveBeenCalledWith = [min, max];
        return 0;
      }
    };
    const motd = new MessageOfTheDay(messages, mockRng);

    motd.getMessage();

    expect(mockRng.getNumber.toHaveBeenCalledWith).toEqual([0, messages.length]);
  });
});
