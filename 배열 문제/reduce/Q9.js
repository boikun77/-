// 이름을 키로 하여 사용자 정보를 담은 객체를 만드는 함수를 작성하세요.
const users = [
  { name: "Tom", age: 20 },
  { name: "Jane", age: 22 },
];
const usersByName = (users) =>
  users.reduce((acc, cur) => ({ ...acc, [cur.name]: cur }), {}); // [cur.name] 을 사용하는 이유는 그 값, 즉 프로퍼티 이름 (프로퍼티 값 x)이 순회를 하며 바뀌는 동적인 요소이기 떄문..?
console.log(usersByName(users)); // { Tom: { name: 'Tom', age: 20 }, Jane: { name: 'Jane', age: 22 } }
