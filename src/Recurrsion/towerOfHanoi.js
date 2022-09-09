export function towerOfHanoi(n, A, B, C) {
  if (n === 1) {
    console.log(`moving 1 disc from tower ${A} to tower ${C}`);
    return;
  }
  towerOfHanoi(n - 1, A, C, B);
  console.log(`moving ${n} disc from tower ${A} to tower ${C}`);
  towerOfHanoi(n - 1, B, A, C);
}
