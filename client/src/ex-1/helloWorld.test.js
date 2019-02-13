import greet from './helloWorld';

describe('Greeter', function() {
  it('should say Hello World! when no name is provided', function() {
    const result = greet();

    expect(result).toBe('Hello World!');
  });
  it('should greet by the name when name is provided', function() {
    const result = greet('Myamoto');

    expect(result).toBe('Hello Myamoto!');
  });
});
