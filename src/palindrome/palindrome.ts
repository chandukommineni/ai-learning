export function isPalindrome(s: string): boolean {
  const normalized = s.toLowerCase();
  return normalized === normalized.split('').reverse().join('');
}
