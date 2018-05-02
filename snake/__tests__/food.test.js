const food = require('../logic/food.js');


describe('createFood', () => {
    it('should be defined', () => {
        expect(food.createFood).toBeDefined();
    })
})

describe('position', () => {
    it('position food testing', () => {
      expect(food.xPosition).toBeDefined();
      expect(food.yPosition).toBeDefined();
      expect(food.xPosition(10, 10, 1)).toBeGreaterThanOrEqual(0);
      expect(food.yPosition(10, 10, 1)).toBeGreaterThanOrEqual(0);
      expect(food.xPosition(10, 10, 1)).toBeLessThanOrEqual(10);
      expect(food.yPosition(10, 10, 1)).toBeLessThanOrEqual(10);
    })
  })