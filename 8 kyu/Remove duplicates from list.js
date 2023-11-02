// Определите функцию, которая удаляет дубликаты из массива неотрицательных чисел и возвращает их в результате. Порядок последовательности
// должен оставаться прежним.

function distinct(a) {
    return a.filter((e, i, arr) => arr.indexOf(e) === i)
}


console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));