// Q3. 프로퍼티 정렬
// 다음 출력 결과와 같이 동작하도록 sortBy 함수를 완성하라.

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const sortBy = (todos, key) =>
  todos.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)); // Deep Dive p532.
console.log(sortBy(todos, "id"));
console.log(sortBy(todos, "content"));
