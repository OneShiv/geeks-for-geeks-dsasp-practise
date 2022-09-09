export function isPalindromeNumber(num) {
  let reversedNumber = 0;
  let copyNum = num;
  while (copyNum > 0) {
    let remainder = copyNum % 10;
    copyNum = copyNum - remainder;
    copyNum = copyNum / 10;
    reversedNumber = reversedNumber * 10 + remainder;
  }
  return reversedNumber === num;
}
