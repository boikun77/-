// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

// const countCompletedTodos = (todos) => {
//   let count = 0;
//   todos.forEach(({completed}) => {
//     if (completed === true)
//     {
//       count += 1;
//     }
//   });
//   return count;
// };

// forEach, map
// array.forEach(() => {  // 콜백 함수 });
// arrap.map(() => {
// dskfjsdlfjsdk  // return
// });

// const countCompletedTodos = (todos) =>
//   todos.filter(({ completed }) => completed === true).length;

const countCompletedTodos = (todos) =>
  todos.filter(({ completed }) => completed).length;

console.log(countCompletedTodos(todos)); // 1
