export function fizzBuzz(n: number): string {
  const result = (n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '');
  return result || String(n);
}
