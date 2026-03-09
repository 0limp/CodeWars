// Реализуйте функцию reverse, которая принимает на вход число n и переворачивает его.
// Например, reverse(123) должна возвращать 321. Это следует делать без преобразования введенного числа в строку.

function reverse(n) {
  let result = 0;

  while (n > 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return result;
}

console.log(reverse(1234)); //      ->    4321
console.log(reverse(10987)); //     ->    78901
console.log(reverse(1020)); //      ->    201
