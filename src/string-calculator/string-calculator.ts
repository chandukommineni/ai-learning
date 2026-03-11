export function add(numbers: string): number {
  if (numbers === '') return 0;

  let delimiter = /,|\n/;
  let body = numbers;

  if (numbers.startsWith('//')) {
    const [header, ...rest] = numbers.split('\n');
    delimiter = new RegExp(header.slice(2));
    body = rest.join('\n');
  }

const nums = body.split(delimiter).map(n => parseInt(n, 10)).filter(n => n <= 1000);
const negatives = nums.filter(n => n < 0);
if (negatives.length) throw new Error(`negatives not allowed: ${negatives.join(',')}`);
return nums.reduce((sum, n) => sum + n, 0);
}
