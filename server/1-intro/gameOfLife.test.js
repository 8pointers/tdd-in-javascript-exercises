const isCellAliveInNextGeneration = require('./gameOfLife');

describe('Game of Life - isCellAlive', function() {
  it('should return false if alive cell has fewer than two live neighbours', function() {
    expect(isCellAliveInNextGeneration(true, 1)).toBe(false);
  });
  it('should return true if alive cell has two or three live neighbours', function() {
    expect(isCellAliveInNextGeneration(true, 2)).toBe(true);
    expect(isCellAliveInNextGeneration(true, 3)).toBe(true);
  });
  it('should return false if alive cell has more than three live neighbours', function() {
    expect(isCellAliveInNextGeneration(true, 4)).toBe(false);
  });
  it('should return true if dead cell has exactly three live neighbours', function() {
    expect(isCellAliveInNextGeneration(false, 2)).toBe(false);
  });
});
