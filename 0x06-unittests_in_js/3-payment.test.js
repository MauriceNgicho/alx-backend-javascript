const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call utils,calculateNumber with SUM, 100, 20', () => {
    const spy = sinon,spy(utils, 'calculateNumber');
    sendPaymentReuestToApi(100, 20);
    chai.expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
