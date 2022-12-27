// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
// 최소 몇 판을 시켜야 하는지를return 하도록 solution 함수를 완성해보세요.

// 1 ≤ n ≤ 100

let n = 10; //5

/**나의풀이 */
function solution(n, b = 6) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return lcm(n, b) / 6;
}

//최소공배수를 이용,,,그리고 파라미터값 디폴트를 지정

/**다른 풀이 */
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

//6조각으로 나눴을때 0이 나오면 break 아니라면 +6
