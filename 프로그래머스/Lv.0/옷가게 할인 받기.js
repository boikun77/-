const solution = (price) => {
  if (price < 100000) {
    return Math.floor(price / 10) * 10;
  } else if (price < 300000) {
    return Math.floor((price * 0.95) / 10) * 10;
  } else if (price < 500000) {
    return Math.floor((price * 0.9) / 10) * 10;
  } else {
    return Math.floor((price * 0.8) / 10) * 10;
  }
};

// 자꾸 오류가 뜨는데 뭐지?? 맞는거 같은데
