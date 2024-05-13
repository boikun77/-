// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

const solution = (array, n) =>
  array.reduce((acc, cur) => (cur === n ? acc + 1 : acc), 0);

console.log(solution([1, 1, 2, 3], 1));
