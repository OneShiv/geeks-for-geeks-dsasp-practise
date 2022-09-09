export function printOneToN(n) {
  console.log(n);
  if (n === 0) return;
  printOneToN(n - 1);
}
