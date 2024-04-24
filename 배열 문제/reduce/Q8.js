// 주어진 배열에서 중복을 제거한 유니크한 배열을 만드는 함수를 작성하세요.
const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueNumbers = (numbers) =>
  numbers.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), // 스프레드 문법으로 배열에 요소 추가.
    []
    // Deep Dive p545

    // (acc.push(cur), acc) 이렇게도 가능하다고하는데,  쉼표 연산자에 대해 더 알아봐야 겠다.

    // const uniqueNumbers = (numbers) => [...new Set(numbers)];  Set 객체를 이용하면 더 간결하게 중복 요소 값을 제거할수 있다.
  );
console.log(uniqueNumbers(numbers)); // [1, 2, 3, 4, 5]
