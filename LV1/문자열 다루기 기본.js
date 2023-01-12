// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수,
// solution을 완성하세요.예를 들어 s가 "a234"이면
// False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

let s = "1e1"; //false

/**나의 풀이 */
function solution(s) {
  let answer = [...s].every((x) => !isNaN(x));
  return s.length === 6 || s.length === 4 ? answer : false;
}

//각 글자마다 살펴봐야함. e가 숫자 사이에 있으면 숫자로 인식

/**다른 풀이 */
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
