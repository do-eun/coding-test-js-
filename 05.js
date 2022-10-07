// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.

function solution(s) {
   return Number(s)
}

//연산기호를 붙여도 숫자로 바꿔줌
function num(s) {
   return +s 
}

function num2(s) {
   return s/1 
}

let s = "-1234"
console.log(solution(s)) //-1234
console.log(num(s))
console.log(num2(s))

