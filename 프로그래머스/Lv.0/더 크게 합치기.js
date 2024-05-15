const solution = (a, b) => {
  const add1 = parseInt(a.toString() + b.toString());
  const add2 = parseInt(b.toString() + a.toString());

  if (add1 > add2 || add1 === add2) {
    return add1;
  } else {
    return add2;
  }
};

// const solution = (a, b) => parseInt(`${a}${b}`) > parseInt(`${b}${a}`) ? parseInt(`${a}${b}`) : parseInt(`${b}${a}`);
// 더 간단한 풀이법. (템플릿 문자열 사용)
