export function allDivisorsOfNumber(num) {
  let listOfDivisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      listOfDivisors.push(i);
    }
  }
  return listOfDivisors.join("-");
}

// divisors of number appear in pair
// again x*y = n so max both can be equal so
// x<=n^(1/2)

// not ordered fashion
export function allDivisorsOfNumberOptimized(num) {
  let listOfDivisors = [];
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      listOfDivisors.push(i);
      if (i !== num / i) {
        listOfDivisors.push(num / i);
      }
    }
  }
  return Array.from(listOfDivisors).join("-");
}

// for increasing order we need two loops
// from 1 to sqare root of n and then from square root to n

export function allDivisorsOfNumberOptimizedInorder(num) {
  let listOfDivisors = [];
  let i = 1;
  for (; i * i <= num; i++) {
    if (num % i === 0) {
      listOfDivisors.push(i);
    }
  }
  for (; i >= 1; i--) {
    if (num % i === 0) {
      listOfDivisors.push(num / i);
    }
  }
  return Array.from(listOfDivisors).join("-");
}
