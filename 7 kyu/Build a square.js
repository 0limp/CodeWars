// Верните мне форму, длинную и широкую, как целое число. Целое число будет целым числом от 1 до 50.

// Пример:
// n = 3, квадрат 3x3 назад, как и ниже, в виде строки:
// +++
// +++
// +++

function generateShape(integer) {
  let result = "";
  for (let i = 0; i < integer; i++) {
    let row = "";
    for (let k = 0; k < integer; k++) {
      row += "+";
    }
    result += integer - 1 === i ? row : row + "\n";
  }
  return result;
}

console.log(generateShape(10));
