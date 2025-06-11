const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', function () {
  describe('SUM', function () {
    it('should return 6 when 1.4 and 4.5 are added', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when 1.2 and 3.7 are added', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when 1.4 and 4.5 are subracted', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when 4.4 and 4.4 are subtracted', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.4, 4.4), 0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when 1.4 and 4.5 are divided', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });

    it('should return "Error" when dividing by a value that rounds to 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 0.2), 'Error');
    });
  });
});
