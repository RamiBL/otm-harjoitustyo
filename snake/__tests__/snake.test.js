/* eslint-disable no-undef, no-unused-expressions */ // --> OFF

const snake = require('../logic/snake.js');

describe('createSnake', () => {
  it('should be an array', () => {
    expect(snake.createSnake).toBeDefined();
    expect(snake.createSnake(2)).toBeTruthy;
    expect(snake.createSnake(2)).toBeInstanceOf(Array);
  });
});

describe('checkCollision', () => {
  it('should be an array', () => {
    expect(snake.checkCollision).toBeDefined();
    expect(snake.checkCollision(0, 1, { a: 0, y: 0 })).toBeTruthy;
    expect(snake.checkCollision(0, 1, { a: 1, y: 2 })).toBeFalsy;
  });
});
