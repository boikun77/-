// 성인 사용자의 이름을 콤마로 구분하여 하나의 문자열로 만드는 함수를 작성하세요.
const users = [
  { name: "Tom", age: 16 },
  { name: "Jane", age: 22 },
  { name: "Peter", age: 21 },
  { name: "Mark", age: 17 },
];
const adultNames = (users) => {
  const adult = users.filter((user) => user.age >= 20);
  return adult.map((user) => user.name).join(", "); // Q3 은 reduce, Q5 는 join() 메서드사용... 후자가 더 효율적인것 같다.
};
console.log(adultNames(users)); // 'Jane, Peter'
