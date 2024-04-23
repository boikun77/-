// Q5. 특정 요소 삭제
// 다음 출력 결과와 같이 동작하도록 removeTodo 함수를 완성하라.

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const removeTodo = (todos, key) => todos.filter((todo) => todo.id != [key]); // Deep Dive 521p
todos = removeTodo(todos, 2);
console.log(todos);

/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
