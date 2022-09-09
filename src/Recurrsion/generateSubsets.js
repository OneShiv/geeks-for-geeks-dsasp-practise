let allSubsets = [];
export function generateSubsetsAndReturn(str, current = "", index = 0) {
  generateSubsets(str, (current = ""), (index = 0));
  return allSubsets;
}
export function generateSubsets(str, current = "", index = 0) {
  if (index === str.length) {
    allSubsets.push(current);
    return;
  }
  generateSubsets(str, current, index + 1);
  generateSubsets(str, current + str[index], index + 1);
}
