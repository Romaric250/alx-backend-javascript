const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stubbing;

  beforeEach(() => {
    stubbing = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    stubbing.restore();
  });

  it('sendPaymentRequestToApi with utils', () => {
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(stubbing);
    sinon.assert.calledWith(stubbing, 'SUM', 100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 10');

    spy.restore();
  });
});