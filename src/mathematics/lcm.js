import { optimizedEuclidiean } from "./gcd";

export function naiveLCM(numA, numB) {
  let maxOfTwonum = Math.max(numA, numB);
  let i = maxOfTwonum;
  while (true) {
    if (i % numA === 0 && i % numB === 0) return i;
    i++;
  }
}

// efficient solution
// multiplication of two numbers = gcd(a,b)* lcm(a,b)

export function optimizedLCM(numA, numB) {
  return (numA * numB) / optimizedEuclidiean(numA, numB);
}
