function solution(num, k) {
  return String(num)
    .split("")
    .map((x) => Number(x))
    .filter((x, i) => (x === k ? i : -1));
}
