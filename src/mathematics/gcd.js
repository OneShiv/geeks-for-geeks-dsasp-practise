export function naiveGcdSolution(numA, numB) {
  let max = 1;
  const min = Math.min(numA, numB);
  for (let i = min; i > 0; i--) {
    if (numA % i === 0 && numB % i === 0) {
      max = i;
      break;
    }
  }
  return max;
}

// important point to observe here is gcd will be less than than maximum
// the minimum no of two given number or even lesse than that
// so we can go max till min of among two numbers

// ---------------------
// Eucledian approach

export function gcdEuclidean(numA, numB) {
  while (numA !== numB) {
    if (numA > numB) {
      numA = numA - numB;
    } else if (numB > numA) {
      numB = numB - numA;
    }
  }
  return numA;
}

export function optimizedEuclidiean(numA, numB) {
  if (numB === 0) {
    return numA;
  }
  return optimizedEuclidiean(numB, numA % numB);
}
