// 주어진 객체 배열에 순차적인 ID를 추가하는 함수를 작성하세요.
const items = [{ name: "Chair" }, { name: "Desk" }];
const addId = (items, num) => items.map((item) => ({ ...item, id: num++ })); //여기서 num ++ 가 작동하는 로직??? for 문과 비교했을떄..

// i
// const addId = (items, startId) => items.map((item, index) => ({...item, id: startId + index}));

console.log(addId(items, 100)); // [{ name: 'Chair', id: 100 }, { name: 'Desk', id: 101 }]
