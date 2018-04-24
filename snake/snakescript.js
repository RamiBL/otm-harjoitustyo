/* eslint-disable no-undef, camelcase,
no-restricted-globals, no-unused-vars, no-use-before-define */ // --> OFF

const functions = require('./functions.js');
// Declaring constants and variables
const cw = 10;
let d = 'right';
let food;
let score = 0;
const speed = 50;
const color = 'white';
let tail;
let snakeArray;

document.addEventListener('keypress', () => {
  functions.onKeyPress(event);
});


// Once the DOM is loaded:
document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;


  // Paint cell function
  function paintCell(x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * cw, y * cw, cw, cw);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x * cw, y * cw, cw, cw);
  }


  // Initializer
  function init() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('highscore').innerHTML = score;
    d = 'right';
    snakeArray = functions.createSnake(5);
    functions.createFood(w, h, cw);
    score = 0;
    if (typeof game_loop !== 'undefined') clearInterval(game_loop);
    game_loop = setInterval(paint, speed);
  }

  // Paint snake
  function paint() {
    // Paint the canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(0, 0, w, h);

    let nx = snakeArray[0].x;
    let ny = snakeArray[0].y;

    if (d === 'right') nx += 1;
    else if (d === 'left') nx -= 1;
    else if (d === 'up') ny -= 1;
    else if (d === 'down') ny += 1;

    // Collision check
    if (nx === -1 || nx === w / cw ||
        ny === -1 || ny === h / cw ||
        functions.checkCollision(nx, ny, snakeArray)) {
      if (document.getElementById('highscore') < score) {
        document.getElementById('highscore').innerHTML = score;
      }

      init();
      return;
    }
    document.getElementById('score').innerHTML = score;
    // document.getElementById("highscore").innerHTML = score;
    // Food
    if (nx === food.x && ny === food.y) {
      tail = { x: nx, y: ny };
      score += 1;
      // We have to create a new "food"
      functions.createFood(w, h, cw);
    } else {
      tail = snakeArray.pop();
      tail.x = nx;
      tail.y = ny;
    }
    snakeArray.unshift(tail);

    for (let i = 0; i < snakeArray.length; i += 1) {
      const c = snakeArray[i];
      paintCell(c.x, c.y);
    }
    // Paint the food
    paintCell(food.x, food.y);
  }

  init();
});

module.exports = {
  d,
  color,
  speed,
  cw,
  snakeArray,
  createSnake,
  hello,
  checkCollision,
};
