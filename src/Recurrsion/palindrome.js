export function isPalindrome(inputStr) {
  if (inputStr.length <= 1) {
    return true;
  }
  if (inputStr.length === 2) {
    return inputStr[0] === inputStr[1];
  }
  return (
    inputStr[0] === inputStr[inputStr.length - 1] &&
    isPalindrome(inputStr.substr(1, inputStr.length - 2))
  );
}
