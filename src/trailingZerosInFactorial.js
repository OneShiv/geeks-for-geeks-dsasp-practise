export function trailingZerosInFactorial(num) {
  let res = 0;
  for (let i = 5; i <= num; i = i * 5) {
    res = res + num / i;
  }
  return res;
}
