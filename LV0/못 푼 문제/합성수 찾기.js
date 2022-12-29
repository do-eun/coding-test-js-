// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// 1 ≤ n ≤ 100

let n = 10; //5
// 4, 6, 8, 9, 10

//**나의 풀이 */

//일단 1과 자신으로는 무조건 나눠진다.
//찍수는 무조건 합성수이다. 2로 나눠짐

function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i += 2) {
    for (k = 3; k < i; k++) {
      if (i % k === 0) {
        answer += 1;
        break;
      }
    }
  }
  return Math.floor(n / 2) - 1 + answer;
}

//테스트는 통과했으나 제출에서 실패
//왜..어렵게 했지..밑에 방법도 생각은 했는데..

/**다른 풀이 */
function solution(n) {
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer += 1;
        break;
      }
    }
  }

  return answer;
}
