// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// 3 ≤ numbers의 길이 ≤ 20
// direction은 "left" 와 "right" 둘 중 하나입니다.

let numbers = [1, 2, 3];
let direction = "right"; //[3, 1, 2]

// [4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]

/**나의 풀이 */
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers[numbers.length - 1]) && numbers.splice(-1, 1)
    : numbers.push(numbers[0]) && numbers.splice(0, 1);
  return numbers;
}

/**다른 풀이 */
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

//numbers.pop() 하면 맨뒤값을 제거하고 그 값을 반환~~~!!!!!
