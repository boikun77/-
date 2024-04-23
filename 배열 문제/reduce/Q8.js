// 주어진 배열에서 중복을 제거한 유니크한 배열을 만드는 함수를 작성하세요.
const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueNumbers = (numbers) => numbers.reduce((acc,cur)=>{
    acc.includes(cur) ?   : acc.push(cur)   // Deep Dive p545
});
console.log(uniqueNumbers(numbers)); // [1, 2, 3, 4, 5]
