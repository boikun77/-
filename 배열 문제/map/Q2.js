// 사용자 배열에서 나이만 추출하여 새 배열을 만드는 함수를 작성하세요.

const users = [
  { name: "Tom", age: 10 },
  { name: "Jane", age: 22 },
  { name: "Peter", age: 31 },
];
const ages = (users) => users.map((user) => user.age);
console.log(ages(users)); // [10, 22, 31]
