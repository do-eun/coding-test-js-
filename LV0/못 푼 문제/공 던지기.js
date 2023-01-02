// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때,
// k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

// 2 < numbers의 길이 < 100
// 0 < k < 1,000
// numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
// numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.

let numbers = [1, 2, 3, 4, 5, 6];
let k = 5;
//3

/**풀이 */

const solution = (numbers, k) => numbers[((k * 2 - 1) % numbers.length) - 1];
//k는 1부터 시작해서 2씩 증가함으로 홀수번째. k*2-1 여기서
//배열의 길이가 넘어가는 것을 고려해 % 배열의 길이
//length니까 index를 구하려면 -1

/**더 직관적인 풀이 */
function solution(numbers, k) {
  let idx = 0;
  for (let i = 1; i < k; i++) {
    idx += 2;
    if (idx > numbers.length) {
      idx %= numbers.length;
    }
  }
  return numbers[idx];
}
