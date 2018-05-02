const controls = require('../logic/controls.js');


const a = {key: 'a'};
  const w = {key: 'w'};
  const d = {key: 'd'};
  const s = {key: 's'};


  describe('onKeyPress', () => {
    it('should be defined', () => {
      expect(controls.onKeyPress).toBeDefined();
    })
  })

  // Snake should not be able to do a 180
  describe('onKeyPress', () => {
    it('should not change return value', () => {
      expect(controls.onKeyPress(a, 'right')).toBe('right');
      expect(controls.onKeyPress(w, 'down')).toBe('down');
      expect(controls.onKeyPress(d, 'left')).toBe('left');
      expect(controls.onKeyPress(s, 'up')).toBe('up');
    })
  })

  describe('onKeyPress', () => {
    it('should change return value', () => {
      expect(controls.onKeyPress(a, 'down')).toBe('left');
    })
  })