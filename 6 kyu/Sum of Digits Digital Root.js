function digitalRoot(n) {
  const sum = (n) => {
    return String(n)
      .split("")
      .reduce((a, i) => a + Number(i), 0);
  };

  let result = n > 0 && n <= 10 ? n : sum(n);

  while (result >= 10) {
    result = sum(result);
  }
  return result;
}
