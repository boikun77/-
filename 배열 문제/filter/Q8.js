// 활성화된 사용자(activated: true)만 필터링하는 함수를 작성하세요.
const users = [
  { name: "Tom", activated: false },
  { name: "Jane", activated: true },
];
const activeUsers = (users) => users.filter((user) => user.activated === true);
console.log(activeUsers(users)); // [{ name: 'Jane', activated: true }]
