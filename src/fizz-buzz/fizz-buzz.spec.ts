import { fizzBuzz } from './fizz-buzz';
import { describe,it,expect } from 'vitest';

describe('FizzBuzz', () => {
  it('returns the number as a string for plain numbers', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
    it('returns "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
  });
    it('returns "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  it('returns "FizzBuzz" for multiples of both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });


});
