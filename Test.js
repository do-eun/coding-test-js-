function solution(i, j, k) {
  let answer = 0;
  for (a = i; a <= j; a++) {
    if (String(a).indexOf(String(k))) {
      answer += 1;
    }
  }
  return answer;
}
