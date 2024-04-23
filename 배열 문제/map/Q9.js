// 사용자 객체 배열에서 이메일 주소만 추출하는 함수를 작성하세요.
const users = [
  { name: "Tom", email: "tom@example.com" },
  { name: "Jane", email: "jane@example.com" },
];
const emails = (users) => users.map((user) => user.email);
console.log(emails(users)); // ['tom@example.com', 'jane@example.com']
