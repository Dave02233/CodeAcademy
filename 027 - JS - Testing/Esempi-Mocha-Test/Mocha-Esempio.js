const assert = require('assert');
const Rooster = require('../index.js');

describe('.announceDawn', () => {
  it('returns a rooster call', () => {
    const expected = 'moccammamita!';
    assert.strictEqual(Rooster.announceDawn(), expected);
  })
})

describe('.timeAtDawn', () => {
  it('returns its argument as a string', () => {
    const expected = '5';
    assert.strictEqual(Rooster.timeAtDawn(5), expected);
  })
  it('returns an error if passed a nuber less then 0', () => {
    assert.throws(() => Rooster.timeAtDawn(-1), RangeError);
  })
  it('returns an error if passed a nuber greater then 23', () => {
    assert.throws(() => Rooster.timeAtDawn(24), RangeError);
  })
})