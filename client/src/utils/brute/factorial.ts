const factorial = (n: number) => {
  let rval = 1;
  for (let i = 2; i <= n; i++) rval *= i;
  return rval;
};

export default factorial;