// 주어진 투표 배열에서 각 후보의 투표 수를 계산하고, 가장 많은 투표를 받은 후보의 이름을 반환하는 함수를 작성하세요.
const votes = ["Alice", "Bob", "Alice", "Bob", "Alice", "Charlie"];
const winner = (votes) => {
  const result = votes.reduce(
    (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
    {}
  );
  return Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b)); // 왜 reduce?
};

// Object의 key, value만 뽑을때
// entries ([key, value])

const winner = (votes) =>
  Object.entries(
    votes.reduce((acc, vote) => ({ ...acc, [vote]: (acc[vote] || 0) + 1 }), {})
  ).reduce(
    (acc, [name, count]) => (acc.count > count ? acc : { name, count }),
    { name: "", count: 0 }
  ).name;

console.log(winner(votes)); // 'Alice'

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
