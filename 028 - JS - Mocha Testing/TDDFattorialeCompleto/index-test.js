var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('Risultato del fattoriale di 5 = 120', () => {
      const input = 5;
      const expectedResult = 120;
      const result = Calculate.factorial(input);

      assert.strictEqual(result, expectedResult);
    });
    it('Risultato del fattoriale di 3 = 6', () => {
      const input = 3;
      const expectedResult = 6;
      const result = Calculate.factorial(input);

      assert.strictEqual(result, expectedResult);
    });
    it('Risultato del fattoriale di 0 = 1', () => {
      const input = 0;
      const expectedResult = 1;
      const result = Calculate.factorial(input);

      assert.strictEqual(result, expectedResult);
    });
  });
});