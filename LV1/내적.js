// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
//3

/**나의 풀이 */
function solution(a, b) {
  let obj = [];
  for (i = 0; i < a.length; i++) {
    obj.push(a[i] * b[i]);
  }
  return obj.reduce((a, c) => a + c);
}

/**다른 풀이 */
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
//reduce로 한번에 끝낼 수 있음..!!
