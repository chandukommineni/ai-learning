export function add(numbers: string): number {
  if (numbers === '') return 0;

  let delimiter = /,|\n/;
  let body = numbers;

  if (numbers.startsWith('//')) {
    const [header, ...rest] = numbers.split('\n');
    delimiter = new RegExp(header.slice(2));
    body = rest.join('\n');
  }

  return body.split(delimiter).reduce((sum, n) => sum + parseInt(n, 10), 0);
}
