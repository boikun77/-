const solution = (str_list) => {
  let numOfL = str_list.filter((str) => str === "l").length;
  let numOfR = str_list.filter((str) => str === "r").length;
  if (
    (str_list.includes("l") && str_list.length >= 2 && numOfL === 1) ||
    (str_list.includes("r") && str_list.length >= 2)
  ) {
    return str_list.findIndex((str) => str === "l") <
      str_list.findIndex((str) => str === "r")
      ? str_list.slice(
          0,
          str_list.findIndex((str) => str === "l")
        )
      : str_list.slice(str_list.findIndex((str) => str === "r") + 1);
  } else {
    return [];
  }
};

console.log(solution(["u", "l", "l", "l"]));
