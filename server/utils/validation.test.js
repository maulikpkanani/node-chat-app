const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var variable = 123;
    var res = isRealString(variable);
    expect(res).toBeFalsy();
  });

  it('should reject with only spaces', () => {
    var variable = '   ';
    var res = isRealString(variable);
    expect(res).toBeFalsy();
  });

  it('should allow string with non-spaces character', () => {
    var variable = '  mak  ';
    var res = isRealString(variable);
    expect(res).toBeTruthy();
  });
});
