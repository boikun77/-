// Q2. 특정 프로퍼티 값 추출
// 다음 출력 결과와 같이 동작하도록 getValues 함수를 완성하라.

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const getValues = (todos, key) => todos.map((todo) => todo[key]); //여기서 key 에 대괄호 표기법은 사용하는 이유는 동적인 프로퍼티 이름에 접근하기 위해서이다.
console.log(getValues(todos, "id")); // [3, 2, 1]
// console.log(getValues(todos, "content")); // ['HTML', 'CSS', 'Javascript']
// console.log(getValues(todos, "completed")); // [false, true, false]
