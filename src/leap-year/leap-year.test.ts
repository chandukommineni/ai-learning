import { describe, it, expect } from 'vitest';
import { isLeapYear } from './leap-year';

describe('LeapYear', () => {
  it('returns false for a regular year not divisible by 4', () => {
    expect(isLeapYear(2001)).toBe(false);
  });

  it('returns true for a year divisible by 4', () => {
    expect(isLeapYear(2004)).toBe(true);
  });
});
