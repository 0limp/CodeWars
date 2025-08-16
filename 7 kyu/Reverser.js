// не завершенно
function reverse(n) {
  const digits = [];

  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }

  return digits;
}

console.log(reverse(1234)); //      ->    4321
console.log(reverse(10987)); //     ->    78901
console.log(reverse(1020)); //      ->    201
