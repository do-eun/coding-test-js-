// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 - 1을 return 합니다.

// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000

let array = [1, 2, 3, 3, 3, 4]; //3

//array = [1, 2, 3, 3, 3, 4] //3

function solution(array) {
  const obj = array.reduce((a, v) => ({ ...a, [v]: (a[v] || 0) + 1 }), {});
  //{"1":1,"2":1,"3":3,"4":1} //키와 해당하는 갯수를 객체로 출력

  function getKeyByValue(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  } //value 값으로 key를 찾아주는 함수

  let arr = Object.values(obj).sort((a, b) => b - a); //value 값을 내림차순으로 정렬
  let key = getKeyByValue(obj, arr[0]); //제일 큰 값의 키 값을 찾음
  return arr[0] === arr[1] ? -1 : Number(key);
  //정렬한값에 중복이 있다면 -1 반환하고 아닐경우 가장 큰 값의 key를 반환
}

/**내장 함수 없는 코드 */
function solution(array) {
  const obj = array.reduce((a, v) => ({ ...a, [v]: (a[v] || 0) + 1 }), {});

  let arr = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  let value = Object.values(obj).sort((a, b) => b - a);
  return value[0] === value[1] ? -1 : Number(arr[0]);
}
