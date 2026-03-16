function breachAttempts(hackers, securityLevel, increase) {
  let breach = 0;
  let currentSecurity = Number(securityLevel);
  let inc = Number(increase);

  for (const attackLevel of hackers) {
    attackLevel <= currentSecurity ? (currentSecurity += inc) : (breach += 1);
  }

  return breach;
}

console.log(breachAttempts([7, 6, 8, 9], 6, 2));
