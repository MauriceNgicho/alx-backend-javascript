const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('Returns 200 when ID is a number', (done) => {
    request.get(`${baseUrl}/123`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Returns 404 when ID is not a number', (done) => {
    request.get(`${baseUrl}/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Returns 404 when ID is alphanumeric', (done) => {
    request.get(`${baseUrl}/123abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
