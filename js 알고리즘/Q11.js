// 11. id가 1인 요소가 하나라도 있는지 확인하기

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

// const hasItemById = (id) => {
//   todos.filter((todo) => {
//     todo.id === 1;
//   });
//   if (hasItem.length > 0) {
//     return t;
//   }
// };

// const hasItemById = (id) => {
//   const filtered = todos.filter((todo) => {
//     todo.id === 1;
//   });
//   return filtered.length > 0;
// };

// const hasItemById = (id) => todos.filter((todo) => todo.id === id).length > 0;

// const hasItemById = (id) => !!todos.filter((todo) => todo.id === id).length;

const hasItemById = (id) => todos.some((todo) => todo.id === id);

console.log(hasItemById(1)); // true
