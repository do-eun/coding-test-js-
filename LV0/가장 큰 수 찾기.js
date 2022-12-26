// 정수 배열 array가 매개변수로 주어질 때,
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array 원소 ≤ 1,000
// array에 중복된 숫자는 없습니다.

let array = [1, 8, 3]; //[8, 1]

/**나의 풀이 */
function solution(array) {
  let answer = [...array].sort((a, b) => b - a)[0];
  return [answer, array.indexOf(answer)];
}

/**다른 풇이 */
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

//베열 풀어서..MAX하면 되는구나..
