const solution = (slice, n) => {
  let i = 1;
  for (i; slice * i < n; i++) {} // for 문의 조건식 작성할때 주의 할것! 조건식이 false 일때까지 순회한다.
  return i;
};
console.log(solution(7, 10));
