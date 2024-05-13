// 1990년에 태어난 사람들의 이름을 찾아 하나의 문자열로 연결하는 함수를 작성하세요.
const people = [
  { name: "Tom", born: 1989 },
  { name: "Jane", born: 1990 },
  { name: "Peter", born: 1990 },
  { name: "Mark", born: 1987 },
];
// const namesFrom1990 = (people) => {
//   const result = people.filter((year) => year.born == 1990);
//   return result.reduce((acc, cur) => acc + " " + cur.name, "");
//   // return result.map((user) => user.name).join(" "); // 혹은 join() 메서드 사용.. 이렇게 하는것이 앞에 공백도 안생기고 더 정확한 방법같다.
// };

const namesFrom1990 = (people) =>
  people
    .filter((person) => person.born === 1990)
    .map((person) => person.name)
    .join(" ");

console.log(namesFrom1990(people)); // 'Jane Peter'
