const expect = require('chai').expect;
const calculateNumber = require('./1-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return sum of rounded numbers' () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 7.4, 4.5)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.6, 3.4)).to.equal(-1);
    });
  });

  describe('DIVIDE', () => {
    it('should return division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 3.0, 0.2)).to.equal('Error');
    });
  });
});
