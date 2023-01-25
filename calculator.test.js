const calculator = require('./calculator');

const cal= new calculator

describe('cal.add',() =>{
  test('2+3 is equal to 5', () => {
    expect(cal.add(2, 3)).toBe(5);
  });

  test('10 + 3 is equal to 13', () => {
    expect(cal.add(10, 3)).toBe(13);
  });

  test('8 + 7 is equal to 15', () => {
    expect(cal.add(8, 7)).toBe(15);
  });
})

describe('cal.subtract',() =>{
  test('8 -3 is equal to 5', () => {
    expect(cal.subtract(8, 3)).toBe(5);
  });

  test('10 - 3 is equal to 7', () => {
    expect(cal.subtract(10, 3)).toBe(7);
  });

  test('8 - 7 is equal to 1', () => {
    expect(cal.subtract(8, 7)).toBe(1);
  });
})

describe('cal.multiply',() =>{
  test('8*3 is equal to 24', () => {
    expect(cal.multiply(8, 3)).toBe(24);
  });

  test('10*3 is equal to 30', () => {
    expect(cal.multiply(10, 3)).toBe(30);
  });

  test('8*7 is equal to 1', () => {
    expect(cal.multiply(8, 7)).toBe(56);
  });
})

describe('cal.devide',() =>{
  test('9/3 is equal to 3', () => {
    expect(cal.devide(9, 3)).toBe(3);
  });

  test('24/6 is equal to 4', () => {
    expect(cal.devide(24, 6)).toBe(4);
  });

  test('56/7 is equal to 8', () => {
    expect(cal.devide(56, 7)).toBe(8);
  });
})






