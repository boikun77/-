// 숫자 배열에서 최대값을 찾는 함수를 작성하세요.
const numbers = [10, 20, 30, 40, 100, 5];
const maxNumber = (numbers) =>
  numbers.reduce((acc, cur) => (acc > cur ? acc : cur)); // 요소들을 차례대로 비교하며 가장 큰 1개만 남긴후 반환.. Math.max() 메서드가 더 편해 보인다..
console.log(maxNumber(numbers)); // 100
