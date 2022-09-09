import { isPrimeNaiveOptimizsedSecond } from "./primeNumber";

export function getPrimeFactors(num) {
  let primeFactorsList = [];
  for (let i = 2; i < num; i++) {
    if (isPrimeNaiveOptimizsedSecond(i)) {
      let x = i;
      while (num % x === 0) {
        primeFactorsList.push(i);
        x = x * i;
      }
    }
  }
  return primeFactorsList.join("-");
}

export function getPrimeFactorsOptimized(num) {
  if (num <= 1) return;
  let primeFactorsList = [];
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      primeFactorsList.push(i);
      num = num / i;
    }
  }
  if (num > 1) {
    primeFactorsList.push(num);
  }
  return primeFactorsList.join("-");
}

export function getPrimeFactorsMostOptimised(num) {
  if (num <= 1) return;
  let primeFactorsList = [];
  while (num % 2 === 0) {
    primeFactorsList.push(2);
    num = num / 2;
  }
  while (num % 3 === 0) {
    primeFactorsList.push(3);
    num = num / 3;
  }
  for (let i = 5; i * i <= num; i = i + 6) {
    while (num % i === 0 || num % (i + 2) === 0) {
      if (num % i === 0) {
        primeFactorsList.push(i);
        num = num / i;
      }
      if (num % (i + 2) === 0) {
        primeFactorsList.push(i + 2);
        num = num / (i + 2);
      }
    }
  }
  if (num > 3) {
    primeFactorsList.push(num);
  }
  return primeFactorsList.join("-");
}
