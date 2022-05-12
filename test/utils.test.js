const { equal } = require('assert');
const { payload } = require('../routes/api/matlab/utils');

test('Should return object containing proper label and message', () => {
  expect(payload('label', '41,159 of 109,712').label).toBe('label');
  expect(payload('label', '41,159 of 109,712').message).toBe(
    '41,159 of 109,712'
  );
});
