/* eslint no-undef: 0 */ // --> OFF

/** Creates a snake
 * @param {integer} x length of the snake
 */
function createSnake(x) {
  const length = x;
  const newArray = [];
  for (let i = length - 1; i >= 0; i -= 1) {
    newArray
      .push({ x: i, y: 0 });
  }
  return newArray;
}

/** This is a function to check for collisions
 * @param {integer} x x coordinate
 * @param {integer} y y coordinate
 * @param {array} array
 */
function checkCollision(x, y, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].x === x && array[i].y === y) {
      return true;
    }
  } return false;
}

/** This is a function to check if the snake collides
 *  with something
 * @param {*} nX snake's x coordinate
 * @param {*} nY snake's y coordinate
 * @param {*} width width of the playground
 * @param {*} height height of the playground
 * @param {*} size size of a block
 */
function snakeCollides(nX, nY, width, height, size) {
  if (nX === -1 || nX === width / size ||
      nY === -1 || nY === height / size ||
      snake.checkCollision(nX, nY, snakeArray)) return true;
  return false;
}


module.exports = {
  createSnake,
  checkCollision,
  snakeCollides,
};
