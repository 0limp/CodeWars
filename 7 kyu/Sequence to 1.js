function seqToOne(n) {
  const result = [];
  const step = n > 0 ? -1 : 1;

  for (let i = n; i !== 1 + step; i += step) {
    result.push(i);
  }

  return result;
}

console.log(seqToOne(-5));
