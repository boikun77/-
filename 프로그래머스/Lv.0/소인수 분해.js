const solution = (n) => {
  const numArray = [];
  let i;
  for (i = 2; i <= n; i++) {
    if (n === 1) {
      return;
    } else if (n % i === 0) {
      numArray.push(i);
      n = n / i;
      i = 2;
    }
  }
  return numArray;
};
  // 못풀었다,, 다시풀기

console.log(solution(12));
