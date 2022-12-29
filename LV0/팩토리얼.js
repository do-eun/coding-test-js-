// i팩토리얼(i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// i! ≤ n

// 0 < n ≤ 3,628,800

let n = 7; //3

/**나의 풀이 */
function solution(n) {
  let answer = 1;
  let num = 0;
  for (i = 1; i <= 10; i++) {
    answer *= i;
    if (n < answer) {
      num = i - 1;
      break;
    } else if (n === answer) {
      num = i;
    }
  }
  return num;
}

/**다른 풀이 */
function solution2(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}

console.log(solution2(3628800)); //10
//작을때까지만 반복문을 돌고 그 값보다 커지면 반복문 나옴
