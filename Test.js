function solution(babbling) {
  let can = ["aya", "ye", "woo", "ma"];
  let answer = [];
  for (i = 0; i < can.length; i++) {
    answer.push(babbling.map((x) => x.split(can[i])));
  }
  return answer;
}
