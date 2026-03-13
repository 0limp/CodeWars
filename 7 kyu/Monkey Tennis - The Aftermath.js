function ballCollector(detritus) {
  return detritus.reduce((a, i) => (i === 58 ? { weight: a.weight + i } : a), {
    weight: 0,
  });
}

console.log(ballCollector([58, 68, 62, 69, 58]));
