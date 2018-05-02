
function xPosition(width, height, size) {
  return Math.round(Math.random() * ((width - size) / size));
}

function yPosition(width, height, size) {
  return Math.round(Math.random() * ((height - size) / size));
}

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
