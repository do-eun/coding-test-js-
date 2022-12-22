// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

let my_string = "aAb1B2cC34oOp";

/**나의 풀이 */
function solution(my_string) {
  return my_string
    .split("")
    .filter((x) => Number(x))
    .reduce((a, c) => a + c / 1, 0);
}

//Number('123'); // 숫자 123을 반환
// Number('123') === 123; // 참

// Number('unicorn'); // NaN
// Number(undefined); // NaN

function solution3(my_string) {
  return my_string
    .split("")
    .filter((x) => x / 1) //이것도 가능
    .reduce((a, c) => a + c / 1, 0);
}

//NaN 판별은 isNaN만 가능

console.log(solution(my_string));

/**다른 풀이 */
function solution2(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, "")
    .split("")
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}
