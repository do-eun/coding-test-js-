function solution(balls, share) {
  let n = 1;
  for (i = balls; i > balls - share; i--) {
    n *= i;
  }
  let m = 1;
  for (k = share; k > 0; k--) {
    m *= k;
  }
  return n;
}
