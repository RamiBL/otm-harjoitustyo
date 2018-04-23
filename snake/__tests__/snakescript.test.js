const snakescript = require('../snakescript.js');


//  Checking that class is
test('class defined', () => {
  expect((snakescript)).toBeDefined();
});

// Checking that variables are defined
test('variables defined', () => {
  expect(snakescript.d).toBeDefined();
  expect(snakescript.color).toBeDefined();
  expect(snakescript.cw).toBeDefined();
  expect(snakescript.speed).toBeDefined();
});

//  Checking that values match
test('variables match', () => {
  expect(snakescript.d).toBe('right');
  expect(snakescript.color).toBe('white');
  expect(snakescript.cw).toBe(10);
  expect(snakescript.speed).toBe(50);
});

test("testing create snake function", () => {
  expect(snakescript.snakeArray).not.toBeDefined();
});

// Just trying
describe('hello', () => {
  it('should output hello', () => {
    expect(snakescript.hello()).toBe('hello');
  })
})

// Creating a snake (array)
describe('createSnake', () => {
  it('should be an array', () => {
    expect(snakescript.createSnake).toBeDefined();
    expect(snakescript.createSnake(2)).toBeTruthy;
    expect(snakescript.createSnake(2)).toBeInstanceOf(Array);
  })
})

// Testing the collision function
describe('checkCollision', () => {
  it('should be an array', () => {
    expect(snakescript.checkCollision).toBeDefined();
    expect(snakescript.checkCollision(0, 1, {x: 0, y: 0})).toBeTruthy;
    expect(snakescript.checkCollision(0, 1, {x: 1, y: 2})).toBeFalsy;
  })
})



