// 문자열 my_string이 매개변수로 주어집니다.
// my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ my_string의 길이 ≤ 1, 000

/**나의 풀이 */

let my_string = "jaron"; //"noraj"

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

//문자마다 쪼개고.. 뒤집고 .. 합치기
// [ 'j', 'a', 'r', 'o', 'n' ]
//[ 'n', 'o', 'r', 'a', 'j' ]
//noraj
