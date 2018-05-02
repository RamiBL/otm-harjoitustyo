function onKeyPress(event, d) {
  switch (event.key) {
    case 'a':
      if (d === 'right') return d;
      return 'left';

    case 'w':
      if (d === 'down') return d;
      return 'up';

    case 'd':
      if (d === 'left') return d;
      return 'right';

    case 's':
      if (d === 'up') return d;
      return 'down';

    default:
      return d;
  }
}

module.exports = {
  onKeyPress,
};
