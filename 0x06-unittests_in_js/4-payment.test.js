
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  let test;

  beforeEach(() => {
    test = sinon.test(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    test.restore();
  });

  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spi = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(test);
    sinon.assert.calledWith(test, 'SUM', 100, 20);

    sinon.assert.calledOnce(spi);
    sinon.assert.calledWith(spi, 'The total is: 10');

    spi.restore();
  });
});