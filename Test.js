let my_string = "aAb1B2cC34oOp";

function solution(my_string) {
  let answer = [];
  answer = my_string.split("").filter((x) => Number(x) !== NaN);
  return answer;
}
console.log(solution(my_string));
console.log(Number("a"));
