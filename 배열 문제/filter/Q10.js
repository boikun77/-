// 1990년에 출생한 사람만 필터링하는 함수를 작성하세요.
const people = [
  { name: "Tom", born: 1989 },
  { name: "Jane", born: 1990 },
];
const bornIn1990 = (people) => people.filter((info) => info.born === 1990);
console.log(bornIn1990(people)); // [{ name: 'Jane', born: 1990 }]
