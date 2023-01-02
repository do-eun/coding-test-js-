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
  let answer = "";
  for (i = 0; i < num.length; i++) {
    answer = numbers.split(num[i]).join(i);
  }
  return answer;
}
