// 객체 배열에서 'value' 프로퍼티의 값을 모두 더하는 함수를 작성하세요.
const items = [{ value: 10 }, { value: 20 }, { value: 30 }];
const totalValue = (items) => items.reduce((acc, cur) => acc + cur.value, 0);
console.log(totalValue(items)); // 60
