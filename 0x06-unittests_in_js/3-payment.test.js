/* The code snippet `const expect = require('chai').expect; const Utils = require('./utils');` is
importing the `expect` function from the Chai assertion library and the `Utils` module from a file
named `utils.js`. */
/* The code snippet `const expect = require('chai').expect; const Utils = require('./utils');` is
importing the `expect` function from the Chai assertion library and the `Utils` module from a file
named `utils.js`. */
const expect = require('chai').expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi with the cN method of Utils', () => {
    const S = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(S.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(S.calculateNumber.callCount).to.be.equal(1);
    S.calculateNumber.restore();
  });
});