const functions = require('../logic/functions.js');

test('Class functinos is defined', () => {
    expect(functions).toBeDefined();
})
// describe('createFood', () => {
//     it('should be defined', () => {
//         expect(functions.createFood).toBeDefined();
//     })
// })
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
    expect(functions.checkCollision(0, 1, {a: 0, y: 0})).toBeTruthy;
    expect(functions.checkCollision(0, 1, {a: 1, y: 2})).toBeFalsy;
  })
})

// describe('position', () => {
//     it('position functions testing', () => {
//       expect(functions.xPosition).toBeDefined();
//       expect(functions.yPosition).toBeDefined();
//       expect(functions.xPosition(10, 10, 1)).toBeGreaterThanOrEqual(0);
//       expect(functions.yPosition(10, 10, 1)).toBeGreaterThanOrEqual(0);
//       expect(functions.xPosition(10, 10, 1)).toBeLessThanOrEqual(10);
//       expect(functions.yPosition(10, 10, 1)).toBeLessThanOrEqual(10);
//     })
//   })

  // const a = {key: 'a'};
  // const w = {key: 'w'};
  // const d = {key: 'd'};
  // const s = {key: 's'};


  // describe('onKeyPress', () => {
  //   it('should be defined', () => {
  //     expect(functions.onKeyPress).toBeDefined();
  //   })
  // })

  // // Snake should not be able to do a 180
  // describe('onKeyPress', () => {
  //   it('should not change return value', () => {
  //     expect(functions.onKeyPress(a, 'right')).toBe('right');
  //     expect(functions.onKeyPress(w, 'down')).toBe('down');
  //     expect(functions.onKeyPress(d, 'left')).toBe('left');
  //     expect(functions.onKeyPress(s, 'up')).toBe('up');
  //   })
  // })

  /*
  // Testing the switch statements with input that should change return
  describe('onKeyPress', () => {
    it('should change return value', () => {
      expect(functions.onKeyPress(a, 'down')).toBe('left');
    })
  })
  */
  