// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

let absolutes = [4, 7, 12];
let signs = [true, false, true]; //9

/**나의 풀이 */
function solution(absolutes, signs) {
  let obj = [];
  for (i = 0; i < absolutes.length; i++) {
    obj.push(signs[i] ? absolutes[i] : -absolutes[i]);
  }
  return obj.reduce((a, c) => a + c);
}

//이게 더 빠름, 위에는 반복문 두번 돔

function solution2(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      a = absolutes[i];
    } else {
      a = -absolutes[i];
    }
    sum += a;
  }
  return sum;
}

//**다른 풀이 */
//reduce로 끝내버리기
function solution3(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
