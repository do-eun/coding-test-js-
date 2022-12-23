function solution(my_string) {
  let a = my_string.toUpperCase().split("");
  return my_string.split("").map((x, i) => {
    x === a[i] ? x.toLowerCase() : a[i];
  });
}
