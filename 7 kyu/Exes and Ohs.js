// Проверьте, содержит ли строка одинаковое количество символов «x» и «o». Метод должен возвращать логическое значение и быть
// нечувствительным к регистру. Строка может содержать любой символ.

// Примеры ввода/вывода:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const strArr = str.toLowerCase().split('');
    const x = strArr.filter((e) => e === 'x').length;
    const o = strArr.filter((e) => e === 'o').length;
    return x === o || x === 0 && o === 0
}
