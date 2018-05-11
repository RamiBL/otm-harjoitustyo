/* eslint-disable no-undef, camelcase,
no-restricted-globals, no-unused-vars, no-use-before-define , import/no-unresolved */ // --> OFF

const snake = require('./logic/snake.js');
const foodFunctions = require('./logic/food.js');
const controls = require('./logic/controls.js');
const write = require('./db/writedata.js');
const read = require('./db/readdata.js');
const sqlite3 = require('sqlite3').verbose();

const size = 10;
let direction = 'right';
let food;
let score = 0;
let highscore = 0;
const speed = 35;
const color = 'white';
let tail;
let snakeArray;


document.addEventListener('keypress', () => {
  direction = controls.onKeyPress(event, direction);
});


document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  function paintCell(x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x * size, y * size, size, size);
  }

  function init() {
    read.getMax().then((result) => {
      document.getElementById('highscore').innerHTML = result;
    });
    direction = 'right';
    snakeArray = snake.createSnake(5);
    foodFunctions.createFood(w, h, size);
    score = 0;
    if (typeof game_loop !== 'undefined') clearInterval(game_loop);
    game_loop = setInterval(paint, speed);
  }

  function paint() {

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(0, 0, w, h);

    let nx = snakeArray[0].x;
    let ny = snakeArray[0].y;

    if (direction === 'right') nx += 1;
    else if (direction === 'left') nx -= 1;
    else if (direction === 'up') ny -= 1;
    else if (direction === 'down') ny += 1;


    if (snake.snakeCollides(nx, ny, w, h, size)) { 
      write.insert(score).then(read.getMax().then((result) => {
        highscore = result;
        document.getElementById('highscore').innerHTML = highscore;
      }));
      window.location.href = 'menu.html';
      return;
    }
    
    document.getElementById('score').innerHTML = score;
 
    if (nx === food.x && ny === food.y) {
      tail = { x: nx, y: ny };
      score += 1;
      foodFunctions.createFood(w, h, size);
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

    paintCell(food.x, food.y);
  }

  init();
});

module.exports = {
  direction,
  color,
  speed,
  size,
  snakeArray,
};
