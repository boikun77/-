const solution = (names) => {
  let divideByFive = names.length % 5;
  const arrayOfName = [];
  for (let i = 0; i < names.length - divideByFive; i += 5) {
    arrayOfName.push(names.slice(i, i + 5));
  }
  arrayOfName.push(names.slice(names.length - divideByFive));
  console.log(arrayOfName);
  return arrayOfName.map((array) => array[0]);
};

console.log(
  solution([
    "nami",
    "ahri",
    "jayce",
    "garen",
    "ivern",
    "vex",
    "jinx",
    "ivern",
    "vex",
    "jinx",
    "ivern",
    "vex",
    "jinx",
    "ivern",
    "vex",
    "jinx",
  ])
);
