const solution = (arr, idx) =>
  arr.findIndex((item, index) => index > idx && item === 1);

//문제 자체 조건 오류.
console.log(solution([0, 0, 0, 1], 1));
