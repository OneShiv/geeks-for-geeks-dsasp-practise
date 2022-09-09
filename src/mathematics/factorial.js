export function factorialIterative(num) {
  let res = 1;
  for (let i = 2; i <= num; i++) res = res * i;
  return res;
}

export function factorialRecurrsive(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialRecurrsive(num - 1);
}
