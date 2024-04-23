// 가격이 $200 이상인 제품만 필터링하고, 그 제품들의 평균 가격을 계산하는 함수를 작성하세요.
const products = [
  { name: "Keyboard", price: 150 },
  { name: "Mouse", price: 100 },
  { name: "Monitor", price: 300 },
  { name: "USB cable", price: 190 },
];
const averageHighPrice = (products) => {
  const result = products.filter((product) => product.price >= 200);
  return result.reduce((acc, cur) => acc + cur.price, 0) / result.length;
};
console.log(averageHighPrice(products)); // 300
