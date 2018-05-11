/* eslint no-undef: 0 */ // --> OFF

/** Returns a random x position within the canvas,
 * that follows the constraints given as parameters
 * @param {Integer} width The width of the acceptable area
 * @param {Integer} height The height of the acceptable area
 * @param {Integer} size The size
 */
function xPosition(width, height, size) {
  return Math.round(Math.random() * ((width - size) / size));
}

/** Returns a random y position within the canvas,
 * that follows the constraints given as parameters
 * @param {Integer} width The width of the acceptable area
 * @param {Integer} height The height of the acceptable area
 * @param {Integer} size The size
 */
function yPosition(width, height, size) {
  return Math.round(Math.random() * ((height - size) / size));
}

/** Creates a food pellet within the parameteres 
 * @param {Integer} width
 * @param {Integer} height
 * @param {Integer} size 
 */
function createFood(width, height, size) {
  food = {
    x: xPosition(width, height, size),
    y: yPosition(width, height, size),
  };
}


module.exports = {
  createFood,
  xPosition,
  yPosition,
};
