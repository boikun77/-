// 주어진 숫자 배열의 총합을 구하는 함수를 작성하세요.
const numbers = [10, 20, 30, 40];
const sum = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum(numbers)); // 100
