// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록
// solution 함수를 완성해 주세요.

// numbers는 소문자로만 구성되어 있습니다.
// numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// 1 ≤ numbers의 길이 ≤ 50
// "zero"는 numbers의 맨 앞에 올 수 없습니다.

let numbers = "onetwothreefourfivesixseveneightnine"; //123456789

/*풀이 */
function solution(numbers) {
  let num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (i = 0; i < num.length; i++) {
    numbers = numbers.split(num[i]).join(i);
  }
  return Number(numbers);
}

//단어로 쪼개고 그 단어를 숫자로 매꿈
//그리고 그것을 재할당
