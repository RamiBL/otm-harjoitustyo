// import { create } from "domain";
const cw = 10;
let d = 'right';
let food;
let score = 0;
const speed = 50;
const color = 'white';
let tail;
// Snake array
let snakeArray;

// Create snake function
function createSnake(x) {
  const length = x;
  const newArray = [];
  for (let i = length - 1; i >= 0; i -= 1) {
    newArray
      .push({ x: i, y: 0 });
  }
  return newArray;
}

// Function to check for collisions
function checkCollision(x, y, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].x === x && array[i].y === y) {
      return true;
    }
  } return false;
}

function hello() {
  return 'hello';
}

// Making the snake respond to keyboard input
document.addEventListener('keypress', (event) => {
  switch (event.key) {
    case 'a':
      if (d === 'right') break;
      d = 'left';
      break;

    case 'w':
      if (d === 'down') break;
      d = 'up';
      break;

    case 'd':
      if (d === 'left') break;
      d = 'right';
      break;

    case 's':
      if (d === 'up') break;
      d = 'down';
      break;

    default:
      break;
  }
});

// Once the DOM is loaded:
document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Create snake function
  // function createSnake() {
  //   const length = 5;
  //   snakeArray = [];
  //   for (let i = length - 1; i >= 0; i -= 1) {
  //     snakeArray
  //       .push({ x: i, y: 0 });
  //   }
  // }

  // Create food function
  function createFood() {
    food = {
      x: Math.round(Math.random() * ((w - cw) / cw)),
      y: Math.round(Math.random() * ((h - cw) / cw)),
    };
  }

  // Paint cell function
  function paintCell(x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * cw, y * cw, cw, cw);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x * cw, y * cw, cw, cw);
  }

  // Function to check for collisions
  // function checkCollision(x, y, array) {
  //   for (let i = 0; i < array.length; i += 1) {
  //     if (array[i].x === x && array[i].y === y) {
  //       return true;
  //     }
  //   } return false;
  // }

  // Initializer
  function init() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('highscore').innerHTML = score;
    d = 'right';
    snakeArray = createSnake(5);
    createFood();
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
        checkCollision(nx, ny, snakeArray)) {
      // alert(score);
      // document.getElementById("overlay").style.display = "block";
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
      createFood();
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
    // Check the score (againt the hiscore from local storage)
    // checkScore(score);
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
  checkCollision
};
