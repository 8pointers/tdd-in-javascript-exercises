## Exercise 1

Implement a function that determines the state of one cell in the next iteration of the Game of Life (https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The state of the cell in the next iteration is determined by the state of the cell in the current iteration and number of alive neighbors in the current iteration, according to these rules:

- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
