// 장바구니 배열에서 모든 제품의 수량을 합하는 함수를 작성하세요.
const cart = [
  { product: "Laptop", quantity: 1 },
  { product: "Phone", quantity: 3 },
];
const totalQuantity = (cart) =>
  cart.reduce((acc, cur) => acc + cur.quantity, 0);
console.log(totalQuantity(cart)); // 4
