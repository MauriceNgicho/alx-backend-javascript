const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should return successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        chai.expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err)); // catch any unexpected error
  });
});
