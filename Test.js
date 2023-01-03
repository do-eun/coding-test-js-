function solution(id_pw, db) {
  let answer = "";
  for (i of db) {
    if (id_pw[0] === i[0]) {
      if (id_pw[1] === i[1]) {
        answer = "login";
        break;
      }
      answer = "login";
      break;
    } else {
      answer = "login";
    }
  }
}
