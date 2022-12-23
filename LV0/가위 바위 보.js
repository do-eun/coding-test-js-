// 가위는 2 바위는 0 보는 5로 표현합니다.
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을
// return하도록 solution 함수를 완성해보세요.

// 0 < rsp의 길이 ≤ 100
// rsp와 길이가 같은 문자열을 return 합니다.
// rsp는 숫자 0, 2, 5로 이루어져 있습니다.

let rsp = "205"; //"052"

/**나의 풀이 */
function solution(rsp) {
  return rsp
    .split("")
    .map((x) => (+x === 2 ? 0 : +x === 0 ? 5 : 2))
    .join("");
}

/**다른 풀이 */
/*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
