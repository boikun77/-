const solution = (a, b) =>
  parseInt(`${a}${b}`) > 2 * a * b
    ? parseInt(`${a}${b}`)
    : parseInt(`${a}${b}`) < 2 * a * b
    ? 2 * a * b
    : parseInt(`${a}${b}`) === 2 * a * b
    ? parseInt(`${a}${b}`)
    : 0;
