// 주어진 정수 배열에서 홀수만 필터링하는 함수를 작성하세요.
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = (numbers) => numbers.filter((number) => number % 2 === 1);
console.log(oddNumbers(numbers)); // [1, 3, 5]
