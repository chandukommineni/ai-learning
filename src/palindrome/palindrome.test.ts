import { describe, it, expect } from 'vitest';
import { isPalindrome } from './palindrome';

describe('Palindrome', () => {
  it('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('returns true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('returns true for a multi-character palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
  });

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('Madam')).toBe(true);
  });
});
