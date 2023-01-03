// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
// 두 정수 num과 total이 주어집니다.연속된 수 num개를 더한 값이 total이 될 때,
// 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

let num = 5;
let total = 15; //[1,2,3,4,5]

// 5	5	[-1, 0, 1, 2, 3]

/**풀이 */
function solution(num, total) {
  // 초기 값을 구하는 과정
  // total / num 으로 연속 되는 숫자의 중간 값을 구한다.
  // 구한 중간 값에서 num / 2의 내림을 해서 구한 자릿수 값을 빼고
  // 그 값을 올림으로 해서 초기 값을 구한다.

  // ex) num = 4 / total = 14
  // total / num = 3.5
  // num / 2 = 2
  // 3.5 - 2 = 1.5를 올림 처리해서 초기 값은 2
  const min = Math.ceil(total / num - Math.floor(num / 2));

  // Array.from() 메서드를 이용해 구해둔 초기값 부터
  // num의 길이 만큼 해서 답을 구한다.
  return Array.from({ length: num }, (_, i) => i + min);
}

function solution2(num, total) {
  arr = [];

  let check = (num * (num + 1)) / 2;

  let start = (total - check) / num + 1;

  for (let i = 0; i < num; i++) {
    arr.push(start + i);
  }

  return arr;
}
