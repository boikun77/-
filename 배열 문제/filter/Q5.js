// 가격이 $100 이상인 제품만 필터링하는 함수를 작성하세요.
const products = [
  { name: "Keyboard", price: 70 },
  { name: "Monitor", price: 150 },
  { name: "Mouse", price: 50 },
];
const expensiveProducts = (products) =>
  products.filter((product) => product.price >= 100);
console.log(expensiveProducts(products)); // [{ name: 'Monitor', price: 150 }]
