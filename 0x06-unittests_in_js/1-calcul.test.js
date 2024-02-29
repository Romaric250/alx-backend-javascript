// const calculateNumber = (type,a, b) => {
//     const num1 = Math.round(a);
//     const num2 = Math.round(b);
    
//     if (type === 'SUM') {
//         return num1 + num2;
//     }
//     if (type === 'SUBTRACT') {
//       return num1 - num2;
//     }
//     if (type === 'DIVIDE') {
//       if (rounded_b === 0) {
//         return 'Error';
//       }
//       return num1 / num2;
//     }
//   }
  
//   module.exports = calculateNumber;


const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('with type SUM', () => {
  
  it('add 1.7 and 3.5', () => {
    assert.equal(calculateNumber('SUM', 1.7, 3.5), 6);
  });
});

describe('with type SUBTRACT', () => {
  
  it('subtract 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  
});

describe(' with type DIVIDE', () => {
  it('divide 1.4 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  
  it("divide 1.3 and 0.3", () => {
    assert.equal(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
  });

});