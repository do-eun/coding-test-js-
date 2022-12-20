// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100

let str1 = "ab6CDE443fgh22iJKlmn1o";
let str2 = "6CD"; //1

/**나의 풀이 */
function solution(str1, str2) {
  return str1.indexOf(str2) !== -1 ? 1 : 2;
}

/**다른 풀이 */

function solution2(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}

console.log(str1.split(str2));
//있다면 [ 'ab', 'E443fgh22iJKlmn1o' ] 없으면 [ 'ab6CDE443fgh22iJKlmn1o' ] 이므로 length로 판단 가능

function solution3(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

console.log(str1.includes(str2));
//있으면 true 없으면 false
