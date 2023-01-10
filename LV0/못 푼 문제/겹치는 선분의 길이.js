// 선분 3개가 평행하게 놓여 있습니다.
// 세 선분의 시작과 끝 좌표가[[start, end], [start, end], [start, end]] 형태로 들어있는
// 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return
// 하도록 solution 함수를 완성해보세요.

// lines의 길이 = 3
// lines의 원소의 길이 = 2
// 모든 선분은 길이가 1 이상입니다.
// lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
// -100 ≤ a < b ≤ 100

let lines = [
  [0, 1],
  [2, 5],
  [3, 9],
];

//2

/**풀이 */

function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}

//start와 end에 해당하는 공간을 모두 채운 후에 두번 이상 채워진 건 겹쳐진 것이므로 그것의 갯수를 구한다

function solution(lines) {
  let min = Math.min(...lines.flat());
  let max = Math.max(...lines.flat());
  let arr = Array(max - min + 1).fill(0);

  for (let line of lines) {
    line.sort((a, b) => a - b);
    if (min < 0) {
      line[0] += Math.abs(min);
      line[1] += Math.abs(min);
    }
    for (let i = line[0]; i < line[1]; i++) arr[i]++;
  }

  return arr.filter((v) => v > 1).length;
}
