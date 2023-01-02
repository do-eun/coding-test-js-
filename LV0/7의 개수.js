// 머쓱이는 행운의 숫자 7을 가장 좋아합니다.정수 배열 array가 매개변수로 주어질 때,
// 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 100,000

let array = [7, 77, 17]; //4
let array2 = [10, 20]; //0

/**나의 풀이 */
function solution(array) {
  let answer = array.join("").split(7);
  return answer.length > 0 ? answer.length - 1 : 0;
}

//생각해보니까 7이 없을 경우 length가 1이므로 나눌 필요가 없었음
//쪼갠 문자 기준 -1 = 쪼갠 문자 수

/**다른 풀이 */

function solution(array) {
  return array.join("").split("7").length - 1;
}
