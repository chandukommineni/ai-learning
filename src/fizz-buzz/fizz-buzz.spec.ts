import { fizzBuzz } from './fizz-buzz';
import { describe,it,expect } from 'vitest';

describe('FizzBuzz', () => {
  it('returns the number as a string for plain numbers', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});
