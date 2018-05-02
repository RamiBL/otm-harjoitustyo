/* eslint no-undef: 0 */ // --> OFF

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

// Checking for a collision
function checkCollision(x, y, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].x === x && array[i].y === y) {
      return true;
    }
  } return false;
}

// function onKeyPress(event, d) {
//   switch (event.key) {
//     case 'a':
//       if (d === 'right') return d;
//       return 'left';

//     case 'w':
//       if (d === 'down') return d;
//       return 'up';

//     case 'd':
//       if (d === 'left') return d;
//       return 'right';

//     case 's':
//       if (d === 'up') return d;
//       return 'down';

//     default:
//       return d;
//   }
// }


// Controls
/*
function onKeyPress(event) {
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
}
*/

module.exports = {
  createSnake,
  checkCollision,
  // onKeyPress
};

