// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.String
// 0 ≤ n ≤ 1,000,000

let n = 930211; //16

/**나의 풀이 */
function solution(n) {
  let a = String(n).split("");
  let sum = 0;
  for (i of a) {
    sum += i / 1;
  }
  return sum;
}

/**다른 풀이 */
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
