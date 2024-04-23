// 10. completed 값이 전부 true인지 확인하기

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

// const isAllCompleted = (todos) => {
//   todos.filter((todo) => {
//     todo.completed === true;
//   });
//   if (isAllCompleted(todos).length === 3) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isAllCompleted = (todos) => {
//   const filtered = todos.filter((todo) => {
//     todo.completed === true;
//   });
//   if (filtered.length === 3) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isAllCompleted1 = (todos) => {
  const filtered = todos.filter((todo) => {
    todo.completed;
  });
  // 원본
  // if (filtered.length === todos.length) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 2
  // return filtered.length === todos.length ? true : false;

  //3
  return filtered.length === todos.length;
};

const isAllCompleted = (todos) => todos.every(({ completed }) => completed);

console.log(isAllCompleted(todos)); // false
