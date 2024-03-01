const { expect, assert } = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const { spy } = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const stubs = sinon.stub(utils, 'calculateNumber');
    stubs.returns(10);

    const spy = sinon.spy(console, 'log');

    const apiR = sendPaymentRequestToApi(100, 20);

    expect(stubs.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(spy.calledOnceWithExactly('The total is: 10'));
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiR);

    stubs.restore();
    spy.restore();
  });
});