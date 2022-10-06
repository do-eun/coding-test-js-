const solution = (s) => {
 if (s.length % 2 === 0) {
    return s.substr(s.length/2 - 1, 2) 
 } else {
    return s.substr((s.length / 2), 1) //소수점 아래는 무시
 }
}

let s = "abcde"
let s2 = "qwer"
console.log(solution(s))
console.log(solution(s2))
