// 숫자 배열의 각 요소의 제곱근을 구하는 함수를 작성하세요.
const numbers = [4, 9, 16];
const squareRoots = (numbers) => numbers.map((number) => Math.sqrt(number)); // Math.sqrt() => 제곱근 구하는 로직
console.log(squareRoots(numbers)); // [2, 3, 4]
