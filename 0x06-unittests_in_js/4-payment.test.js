const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should stub Utils.calculateNumber and verify console output', function () {
    // Stub calculateNumber to return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    chai.expect(stub.calledOnce).to.be.true;
    chai.expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    chai.expect(logSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    stub.restore();     // restore stub
    logSpy.restore();   // restore spy
  });
});
