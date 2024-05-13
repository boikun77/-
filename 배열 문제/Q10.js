// 10. completed 값이 전부 true인지 확인하기

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

// const isAllCompleted = (todos) =>
//   todos.filter((todo) => todo.completed == true).length === todos.length
//     ? true
//     : false;

// const isAllCompleted = (todos) =>
//   todos.filter((todo) => todo.completed == true).length === todos.length;

// const isAllCompleted = (todos) =>
//   !!todos.filter((todo) => todo.completed == true).length;

console.log(isAllCompleted(todos));
