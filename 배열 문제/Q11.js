// 11. id가 1인 요소가 하나라도 있는지 확인하기

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const hasItemById = (id) => todos.map((todo) => todo.id).includes(id);
console.log(hasItemById(1)); // true
