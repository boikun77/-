// 주어진 숫자 배열의 각 요소에 10을 더하는 함수를 작성하세요.
const numbers = [1, 2, 3];
const addTen = (numbers) => numbers.map((number) => (number += 10));
console.log(addTen(numbers)); // [11, 12, 13]
