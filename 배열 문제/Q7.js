// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const toggleCompletedAll = (todos) =>
  todos.map((todo) => ({ ...todo, completed: true })); // 객체 리터럴을 사용시 중괄호가 함수의 중괄호와 충돌하기 떄문에 명시적으로 리턴문을 써주거나 괄호로 묶어주어야 한다.

todos = toggleCompletedAll(todos);
console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: true }
  ]
  */
