function solution(denum1, num1, denum2, num2) {
  let answer = [denum1 * num2 + denum2 * num1, num1 * num2];
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  gcd(num1, num2);
  return gcd;
}
