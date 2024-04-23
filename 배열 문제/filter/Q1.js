// 나이가 18세 이상인 사용자만 필터링하는 함수를 작성하세요.
const users = [
  { name: "Tom", age: 15 },
  { name: "Jane", age: 22 },
];
const adults = (users) => users.filter((user) => user.age >= 18);
console.log(adults(users)); // [{ name: 'Jane', age: 22 }]
