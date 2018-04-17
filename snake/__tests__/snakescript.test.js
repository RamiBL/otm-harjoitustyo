const snakescript = require('../snakescript.js');


//  Checking that variables are defined
test('class defined', () => {
  expect((snakescript)).toBeDefined();
});

test('d defined', () => {
    expect(snakescript.d).toBeDefined();
  });

test('color defined', () => {
   expect(snakescript.color).toBeDefined();
 });

 test('cw defined', () => {
    expect(snakescript.cw).toBeDefined();
  });

  test('speed defined', () => {
    expect(snakescript.speed).toBeDefined();
  });



 //  Checking that values match
 test('d matches', () => {
    expect(snakescript.d).toBe("right");
  });

test('color matches', () => {
   expect(snakescript.color).toBe("white");
 });

 test('cw matches', () => {
    expect(snakescript.cw).toBe(15);
  });

  test('speed matches', () => {
    expect(snakescript.speed).toBe(130);
  });
