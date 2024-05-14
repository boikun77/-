const solution = (rsp) => {
  const rock = 0;
  const scissors = 2;
  const paper = 5;

  return rsp
    .split("")
    .map((hand) =>
      parseInt(hand) === rock
        ? 5
        : parseInt(hand) === scissors
        ? 0
        : parseInt(hand) === paper
        ? 2
        : "nan"
    )
    .join("");
};
