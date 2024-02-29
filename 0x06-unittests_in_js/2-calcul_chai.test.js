const { expect } = require('chai');
const calculateNumber = require('./1-calcul');


describe('with type SUM', () => {
  
  it('add 1.7 and 3.5', () => {
    expect(calculateNumber('SUM', 1.7, 3.5)).to.equal(6);
  });
});

describe('with type SUBTRACT', () => {
  
  it('subtract 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  
});

describe(' with type DIVIDE', () => {
   it('divide 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
   });
    
  it("divide 1.3 and 0.3", () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
  });


});