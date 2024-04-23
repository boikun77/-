// 사용자 배열에서 모든 사용자의 나이의 합계를 구하는 함수를 작성하세요.
const users = [
  { name: "Tom", age: 20 },
  { name: "Jane", age: 22 },
];
const totalAge = (users) => users.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge(users)); // 42
