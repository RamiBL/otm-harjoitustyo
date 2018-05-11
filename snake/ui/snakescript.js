/* eslint-disable no-undef, camelcase,
no-restricted-globals, no-unused-vars, no-use-before-define */ // --> OFF

const snake = require('./logic/snake.js');
const foodFunctions = require('./logic/food.js');
const controls = require('./logic/controls.js');
const write = require('./db/writedata.js');
const read = require('./db/readdata.js');
const sqlite3 = require('sqlite3').verbose();
// Declaring constants and variables
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


// Once the DOM is loaded:
document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  //OMAA
//   var db = new sqlite3.Database('test.db', (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Connected to the test.db SQlite database.');
// }   );
//     db.run('CREATE TABLE if not exists scorestest(score integer)');

    
// function heye() {
//       let sql = `SELECT MAX(score) FROM scorestest`;
//       let x;
//       db.all(sql, [], (err, rows) => {
//           if (err) {
//               throw err;
//           }
//           rows.forEach((row) => {
//           callback(row);
//           });
//       });
//       function callback(row) {
//           console.log('Getting highest score..')
//           //console.log(row['MAX(score)']);
//           console.log(row);
//           x = row;
//           highscore = x['MAX(score)'];
//           console.log(highscore);
//           console.log('uusi funktio tässä')
//       }
     
//       }
  //OMAA


  // Paint cell function
  function paintCell(x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x * size, y * size, size, size);
  }


  // Initializer
  function init() {
    document.getElementById('overlay').style.display = 'none';
    //document.getElementById('highscore').innerHTML = highscore;
    read.getMax().then(function(result) {
      document.getElementById('highscore').innerHTML = result;
    });
    direction = 'right';
    snakeArray = snake.createSnake(5);
    foodFunctions.createFood(w, h, size);
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

    if (direction === 'right') nx += 1;
    else if (direction === 'left') nx -= 1;
    else if (direction === 'up') ny -= 1;
    else if (direction === 'down') ny += 1;

  

    // Collision check
    if (snake.snakeCollides(nx, ny, w, h, size)) {             
      // if (document.getElementById('highscore') < score) {
      //   document.getElementById('highscore').innerHTML = score;

      // }
      // if(score > highscore) {
      //   highscore = score;
      // };
      document.getElementById('overlay').style.visibility = 'block';
      write.insert(score).then(read.getMax().then(function(result) {
        highscore = result;
        document.getElementById('highscore').innerHTML = highscore;
      }));
      
     
      // read.getMax().then(function(result) {
      //   highscore = result;
      //   document.getElementById('highscore').innerHTML = highscore;
      // });
      //console.log(highscore);
      //document.getElementById('highscore').innerHTML = highscore;

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

    // Paint the food
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
