export function isPrimeNaive(num) {
  // number 1 is nor prime nor composite
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function isPrimeNaiveOptimizsedFirst(num) {
  // number 1 is nor prime nor composite
  if (num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function isPrimeNaiveOptimizsedSecond(num) {
  // number 1 is nor prime nor composite
  if (num === 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
