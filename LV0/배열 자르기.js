// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른
// 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이

let numbers = [1, 2, 3, 4, 5];
let num1 = 1;
let num2 = 3;
// result = [2, 3, 4]

/**나의 풀이 */
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

//배열을 자를때 end 인덱스 앞으로 잘린다는 사실 기억하기
//[1,2,3,4,5] //slice(1,3) => [2,3]
