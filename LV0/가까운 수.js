// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

let array = [10, 11, 12];
let n = 13;
//	12

/**나의 풀이 */
function solution(array, n) {
  array.push(n);
  let answer = array.sort((a, b) => a - b).findIndex((x) => x === n);
  if (answer === array.length - 1) {
    return array[answer - 1];
  } else if (n - array[answer - 1] === array[answer + 1] - n) {
    return array[answer - 1];
  } else if (n - array[answer - 1] < array[answer + 1] - n) {
    return array[answer - 1];
  } else {
    return array[answer + 1];
  }
}

/**다른 풀이 */

function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
}
//[ 12, 11, 10 ]
//// 절댓값 오차가 가장 작은 리스트를 오름차순 정렬하여 가까운 수 중 가장 작은 수 반환
