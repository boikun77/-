// 각 후보자의 투표 수를 집계하는 함수를 작성하세요.
const votes = ["Alice", "Bob", "Alice", "Bob", "Alice", "Charlie"];
const voteResults = (votes) =>
  votes.reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }), {});

console.log(voteResults(votes)); // { Alice: 3, Bob: 2, Charlie: 1 }

// const voteResults = (votes) =>
//   votes.reduce((acc, cur) => ({
//     ...acc,
//     [cur]: (acc[cur] || 0) + 1
//   }), {});
