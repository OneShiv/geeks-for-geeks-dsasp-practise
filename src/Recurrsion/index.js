import { generateSubsetsAndReturn } from "./generateSubsets";
import { isPalindrome } from "./palindrome";
import { printOneToN } from "./printnToOne";
import { ropeCutting } from "./ropeCutting";
import { sumOfDigits } from "./sumOfDigits";
import { towerOfHanoi } from "./towerOfHanoi";

console.log(printOneToN(4));

console.log("isPalindrome", isPalindrome("abbcbba"));
console.log("sum of digits in 312312", sumOfDigits(312312));

console.log(
  "rope cutting problem with length N=23, a=12, b= 9, c=11",
  ropeCutting(23, 11, 9, 12)
);
console.log(
  "rope cutting problem with length N=9, a=2, b= 2, c=2",
  ropeCutting(9, 2, 2, 2)
);

console.log("------------------------");
console.log(
  "subsets of string 'abc'",
  generateSubsetsAndReturn("abc", "c", 0).join(",")
);
console.log("------------------------");
console.log(towerOfHanoi(2, "A", "B", "C"));
