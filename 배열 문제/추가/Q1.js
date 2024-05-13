// 사용자의 이름을 길이 순으로 정렬하고, 각 이름을 그 길이만큼 반복하여 배열로 만드는 함수를 작성하세요.
const users = [{ name: "Tom" }, { name: "Alexander" }, { name: "Bob" }];

const sortAndRepeatNames = (users) => {
  const nameLength = users.sort((a, b) =>
    a.name.length > b.name.length ? 1 : a.name.length < b.name.length ? -1 : 0
  );
  return nameLength.flatMap((user) => Array(user.name.length).fill(user.name)); // === nameLength.map((user) => Array(user.name.length).fill(user.name)).flat();
};

const sortAndRepeatNames = (users) =>
  users
    .map(({ name }) => name)
    .sort((a, b) => a.length - b.length)
    .reduce((acc, name) => [...acc, ...Array(name.length).fill(name)], []);

console.log(sortAndRepeatNames(users)); // ['Tom', 'Tom', 'Tom', 'Bob', 'Bob', 'Bob', 'Alexander', 'Alexander', 'Alexander', 'Alexander', 'Alexander', 'Alexander', 'Alexander', 'Alexander', 'Alexander']

// map filter reduce
