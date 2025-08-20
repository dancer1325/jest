import type add from './add';

export default function calculate(
  addFn: typeof add,
  a: number,
  b: number,
): number {
  return addFn(a, b);
}
