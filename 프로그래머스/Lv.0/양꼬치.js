const solution = (n, k) => {
  const teriyaki = n * 12000;
  const drink = k * 2000;
  const discount = n.toString()[0] * 2000; // 문자열 * 숫자 ==> 암묵적 타입 변환 ;; 숫자*숫자 로 연산이 된다.
  console.log(n.toString()[0]);
  console.log(typeof n.toString()[0]);
  const discountBig = (n.toString()[0] + n.toString()[1]) * 2000;
  if (n < 10) {
    return teriyaki + drink;
  } else if (n >= 100) {
    return teriyaki + drink - discountBig;
  } else {
    return teriyaki + drink - discount;
  }
};

console.log(solution(23, 3));
