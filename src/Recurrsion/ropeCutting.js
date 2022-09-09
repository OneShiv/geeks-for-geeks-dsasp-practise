export function ropeCutting(N, a, b, c) {
  if (N === 0) {
    return 0;
  }
  if (N < 0) {
    return -1;
  }

  let res = Math.max(
    ropeCutting(N - a, a, b, c),
    ropeCutting(N - b, a, b, c),
    ropeCutting(N - c, a, b, c)
  );

  if (res === -1) {
    return -1;
  }
  return res + 1;
}
