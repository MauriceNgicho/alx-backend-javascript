const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log correct total for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    chai.expect(consoleSpy.calledOnce).to.be.true;
    chai.expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log correct total for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    chai.expect(consoleSpy.calledOnce).to.be.true;
    chai.expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
