// 포인트가 50 이상인 사용자만 필터링하는 함수를 작성하세요.
const users = [
  { name: "Tom", points: 30 },
  { name: "Jane", points: 75 },
];
const highPointUsers = (users) => users.filter((user) => user.points >= 50);
console.log(highPointUsers(users)); // [{ name: 'Jane', points: 75 }]
