const functions = require('../functions.js');

test('Class functinos is defined', () => {
    expect(functions).toBeDefined();
})
describe('createFood', () => {
    it('should be defined', () => {
        expect(functions.createFood).toBeDefined();
    })
})
// Creating a snake (array)
describe('createSnake', () => {
    it('should be an array', () => {
      expect(functions.createSnake).toBeDefined();
      expect(functions.createSnake(2)).toBeTruthy;
      expect(functions.createSnake(2)).toBeInstanceOf(Array);
    })
  });

  // Testing the collision function
describe('checkCollision', () => {
  it('should be an array', () => {
    expect(functions.checkCollision).toBeDefined();
    expect(functions.checkCollision(0, 1, {x: 0, y: 0})).toBeTruthy;
    expect(functions.checkCollision(0, 1, {x: 1, y: 2})).toBeFalsy;
  })
})

describe('position', () => {
    it('position functions testing', () => {
      expect(functions.xPosition).toBeDefined();
      expect(functions.yPosition).toBeDefined();
      expect(functions.xPosition(10, 10, 1)).toBeGreaterThanOrEqual(0);
      expect(functions.yPosition(10, 10, 1)).toBeGreaterThanOrEqual(0);
      expect(functions.xPosition(10, 10, 1)).toBeLessThanOrEqual(10);
      expect(functions.yPosition(10, 10, 1)).toBeLessThanOrEqual(10);
    })
  })
/*
  describe('onKeyPress', () => {
    it('should be defined', () => {
      expect(functions.onKeyPress).toBeDefined();
      expect(functions.onKeyPress('b')).toBeFalsy;
    })
  })
  */