// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼
// 문자열을 return 하도록 solution 함수를 완성해보세요.

// 1 < my_string의 길이 < 100
// 0 ≤ num1, num2 < my_string의 길이
// my_string은 소문자로 이루어져 있습니다.
// num1 ≠ num2

let my_string = "I love you";
let num1 = 3;
let num2 = 6;
//"I l veoyou"

/*나의 풀이 */
function solution(my_string, num1, num2) {
  let answer = [...my_string];
  let word = [...my_string];
  answer.splice(num1, 1, word[num2]);
  answer.splice(num2, 1, word[num1]);
  return answer.join("");
}

/**다른 풀이 */

function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

///배열을 저렇게 재할당 해주면 되는구나........
