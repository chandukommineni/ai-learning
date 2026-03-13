import { describe, it, expect } from 'vitest';
import { isPalindrome } from './palindrome';

describe('Palindrome', () => {
  it('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
