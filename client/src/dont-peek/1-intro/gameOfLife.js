const isCellAliveInNextGeneration = (isCellAlive, numberOfAliveNeighbours) =>
  (isCellAlive && numberOfAliveNeighbours === 2) ||
  numberOfAliveNeighbours === 3;

module.exports = isCellAliveInNextGeneration;
