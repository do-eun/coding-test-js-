// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// 1 ≤ s1, s2의 길이 ≤ 100
// 1 ≤ s1, s2의 원소의 길이 ≤ 10
// s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
// s1과 s2는 각각 중복된 원소를 갖지 않습니다.

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"]; //2

/**나의 풀이 */
function solution(s1, s2) {
  let answer = 0;
  if (s1.length >= s2.length) {
    for (str of s1) {
      if (s2.includes(str)) {
        answer += 1;
      }
    }
    return answer;
  } else {
    for (str of s2) {
      if (s1.includes(str)) {
        answer += 1;
      }
    }
    return answer;
  }
}

/**다른 풀이 */

function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

//필터 돌리는데...x 포함하는 것만...
