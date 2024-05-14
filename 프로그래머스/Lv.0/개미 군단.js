const solution = (hp) => {
  const warrior = 5;
  const soldier = 3;
  const worker = 1;
  const first = Math.floor(hp / warrior);
  const second = Math.floor((hp % warrior) / soldier);
  const third = Math.floor(((hp % warrior) % soldier) / worker);
  return first + second + third;
};
