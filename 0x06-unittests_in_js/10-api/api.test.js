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
    request.get(`${baseUrl}/hello`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  it('Returns correct JSON response and status', (done) => {
    request.get('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('Returns welcome message with correct userName', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: { userName: 'Betty' }
    };
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
