export function computePower(num, pow) {
  // naive solution
  let res = 1;
  for (let i = 0; i < pow; i++) {
    res = res * num;
  }
  return res;
}
export function computePowerEfficient(num, pow) {
  // based on strategy
  // if pow even can be written calulcatePower(n/2) * calculatePower(n/2)
  // if odd then convert to even by num * calulcatePower(n - 1)
  // n-1 will be even
  if (pow === 0) {
    return 1;
  }
  if (pow === 1) {
    return num;
  }
  if (pow % 2 === 0) {
    let temp = computePowerEfficient(num, pow / 2);
    return temp * temp;
  } else {
    return num * computePowerEfficient(num, pow - 1);
  }
}
