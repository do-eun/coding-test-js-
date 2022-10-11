// 행렬의 덧셈
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];
let arr3 = [[1], [2]];
let arr4 = [[3], [4]];

function solution(arr1, arr2) {
  var answer = [];
  for (i = 0; i < arr1.length; i++) {
    let sum = [];
    for (k = 0; k < arr1[0].length; k++) {
      sum.push(arr1[i][k] + arr2[i][k]);
    }
    answer.push(sum);
  }
  return answer;
}

function sumMatrix(arr3, arr4) {
  return arr3.map((a, i) => a.map((b, j) => b + arr4[i][j]));
}

console.log(solution(arr1, arr2)); //[ [ 4, 6 ], [ 7, 9 ] ]
console.log(sumMatrix(arr3, arr4)); //[ [ 4 ], [ 6 ] ]
