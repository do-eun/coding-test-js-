// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.덧셈으로 이루어진 다항식 polynomial이
// 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록
// solution 함수를 완성해보세요.같은 식이라면 가장 짧은 수식을 return 합니다.

// 0 < polynomial에 있는 수 < 100
// polynomial에 변수는 'x'만 존재합니다.
// polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
// 항과 연산기호 사이에는 항상 공백이 존재합니다.
// 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
// 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
// " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
// "012x + 001"처럼 0을 제외하고는 0으로 시작하는 수는 없습니다.
// 문자와 숫자 사이의 곱하기는 생략합니다.
// polynomial에는 일차 항과 상수항만 존재합니다.
// 계수 1은 생략합니다.
// 결괏값에 상수항은 마지막에 둡니다.
// 0 < polynomial의 길이 < 50

let polynomial = "3x + 7 + x"; //"4x + 7"

/**나의 풀이 */
function solution(polynomial) {
  let answer = polynomial
    .split(" ")
    .filter((k) => k.includes("x"))
    .map((k) => (k === "x" ? 1 : Number(k.slice(0, 1))))
    .reduce((a, c) => a + c, 0);
  let num = polynomial
    .split(" ")
    .map((x) => Number(x))
    .filter((x) => !isNaN(x))
    .reduce((a, c) => a + c, 0);
  //0차식 숫자만 추출해서 더하기
  if (answer === 1) {
    answer = "";
  }
  return answer !== 0 ? (num ? `${answer}x + ${num}` : `${answer}x`) : `${num}`;
}
//테스트 케이스는 통과했으나 최종 제출은 실패

/**다른 풀이 */
function solution(polynomial) {
  const arr = polynomial.split(" + "); //["3x","7","x"]
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1") //["3","1"] 공백은 1로 치환
    .reduce((a, c) => a + Number(c), 0);
  const num = arr
    .filter((n) => !isNaN(n)) //["7"]
    .reduce((a, c) => a + Number(c), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`); //1이면 계수 생략
  if (num) answer.push(num);

  return answer.join(" + ");
}
