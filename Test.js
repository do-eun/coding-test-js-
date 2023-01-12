function solution(s) {
  let answer = [...s].every((x) => !isNaN(x));
  return s.length === 6 || s.length === 4 ? answer : false;
}

//각 글자마다 살펴봐야함. e가 숫자 사이에 있으면 숫자로 인식
