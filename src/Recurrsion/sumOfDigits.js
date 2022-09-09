export function sumOfDigits(num) {
  if (num < 0) {
    throw new Error("number should be a positive number");
  }
  if (num === 0) {
    return 0;
  }
  let remainder = num % 10;
  return remainder + sumOfDigits((num - remainder) / 10);
}
