const solution = (ineq, eq, n, m) =>
  ineq === ">"
    ? eq === "="
      ? n >= m
        ? 1
        : 0
      : n > m
      ? 1
      : 0
    : eq === "="
    ? n <= m
      ? 1
      : 0
    : n < m
    ? 1
    : 0;

// if (ineq === ">") {
//   return eq === "=" ? (n >= m ? 1 : 0) : n > m ? 1 : 0;
// } else {
//   return eq === "=" ? (n <= m ? 1 : 0) : n < m ? 1 : 0;
// }
console.log(solution("<", "=", 20, 50));
