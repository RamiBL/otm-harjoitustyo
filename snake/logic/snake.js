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

function snakeCollides(n_x, n_y, width, height, size) {
    if (n_x === -1 || n_x === width / size ||
      n_y === -1 || n_y === height / size ||
      snake.checkCollision(n_x, n_y, snakeArray)) return true;
      else return false;
  }


module.exports = {
    createSnake,
    checkCollision,
    snakeCollides
};