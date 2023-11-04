import { expect, test } from '@jest/globals';
import { MATLAB } from '../utils/MATLAB.js';

const m: MATLAB = new MATLAB();

test('Should return object containing proper label and message', () => {
  expect(m.payload('label', '41,159 of 109,712').label).toBe('label');
  expect(m.payload('label', '41,159 of 109,712').message).toBe(
    '41,159 of 109,712'
  );
});
