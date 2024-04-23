// 제품 배열의 총 가격을 계산하는 함수를 작성하세요.
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
const totalPrice = (products) =>
  products.reduce((acc, cur) => acc + cur.price, 0);
console.log(totalPrice(products)); // 1500
