//없는 숫자 더하기

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

const solution = (number) => {
   let sum = 0;
   for(i=0; i < number.length; i++) {
      sum += number[i]
   } return 45-sum
}

let number = [1,2,3,4,6,7,8,0]	
console.log(solution(number)) //14

//필터이용
function solution2(arr1){
	let arr2 = [0,1,2,3,4,5,6,7,8,9]
    let sum = 0; 
    let num = arr2.filter(x => !arr1.includes(x)); //차집합 구하기
    for (i=0; i < num.length; i++) {
        sum += num[i]       
    }
	return sum
}

let arr1 = [1,2,3,4,6,7,8,0]	
console.log(solution2(arr1)) //14

//리듀스 이용

function solution3(numbers) {
   return 45 - numbers.reduce((acc, cur) => acc + cur);
}

let numbers = [1,2,3,4,6,7,8,0]	
console.log(solution3(numbers)) //14