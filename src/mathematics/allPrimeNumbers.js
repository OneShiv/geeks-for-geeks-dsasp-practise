import { isPrimeNaiveOptimizsedSecond } from "./primeNumber";

export function allPrimeNumbers(n) {
  if (n <= 1) return;
  let arr = new Array(n + 1);
  arr.fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (isPrimeNaiveOptimizsedSecond(i)) {
      for (let j = i * i; j <= n; j = j + i) {
        arr[j] = false;
      }
    }
  }
  let allPrimes = [];
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      allPrimes.push(i);
    }
  }
  return allPrimes.join("-");
}
