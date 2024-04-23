// Q4. 새로운 요소 추가
// 다음 출력 결과와 같이 동작하도록 addTodo 함수를 완성하라.

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const addTodo = (todos, content) => [...todos, content];

todos = addTodo(todos, { id: 4, content: "Test", completed: false });
console.log(todos);
/*
  [
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
