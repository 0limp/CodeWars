// isNaN работает не очень надёжно. Мы хотим, чтобы он сообщал, является ли значение или объект числом. Вместо
// этого он просто проверяет, равно ли значение специальному значению NaN, которое у него записано.

// Поэтому давайте создадим корректную функцию с названием isAN — сокращение от "is A Number" (является числом).
// Если передать ей значение, она вернёт true, если это допустимое примитивное число или объект Number,
// и false — если нет.

function isAN(value) {
  if (typeof value === "number") {
    return !Number.isNaN(value);
  }
  if (value instanceof Number) {
    return !Number.isNaN(value.valueOf());
  }
  return false;
}

// console.log(isAN("123")); //                false
// console.log(isAN(Infinity)); //             true
// console.log(isAN(new Number(123))); //      true
// console.log(isAN(123)); //                  true
// console.log(isAN(NaN)); //                  false
// console.log(isAN(Math.PI)); //              true
