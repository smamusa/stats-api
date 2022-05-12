const { equal } = require('assert');
const { payload } = require('../routes/api/matlab/utils');

describe('payload', () => {
  it('Should return object containing proper label and message', () => {
    equal('label', payload('label', '41,159 of 109,712').label);
    equal('41,159 of 109,712', payload('label', '41,159 of 109,712').message);
  });
});
