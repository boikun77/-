// 제품 배열의 가격을 20% 인상하는 함수를 작성하세요.
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
const increasePrice = (products) =>
  products.map((product) => ({ ...product, price: product.price * 1.2 }));
console.log(increasePrice(products)); // [{ name: 'Laptop', price: 1200 }, { name: 'Phone', price: 600 }]
