import greet from './1-helloWorld';

describe('Greeter', function() {
  it('should say Hello World! when no name is provided', function() {
    const myGreet = greet;//Arrange

    const result = myGreet();//Act

    expect(result).toBe('Hello World!');//Assert
  });
  it('should greet by the name when name is provided', function() {
    const myGreet = greet;

    const result = myGreet('Myamoto');

    expect(result).toBe('Hello Myamoto!');
  });
});
