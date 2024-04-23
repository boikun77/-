// Q1.HTML 생성
// 다음 출력 결과와 같이 동작하도록 render 함수를 완성하라.

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const render = (todos) => {
  let html = todos.map(
    (todo) =>
      `<li id=${todo.id}> <label><input type="checkbox" ${
        todo.completed ? "checked" : ""
      }   >${todo.content}</label></li>) `
  );
  return html;
};

console.log(render(todos));
//  출력 결과
{
  /* <li id="3">
    <label><input type="checkbox">HTML</label>
</li>
<li id="2">
    <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
    <label><input type="checkbox">Javascript</label>
</li> */
}
