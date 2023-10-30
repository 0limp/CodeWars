// Дан массив целых чисел. Возвращает массив, где первый элемент — это количество положительных чисел, 
// а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным. 
// Если входные данные представляют собой пустой массив или имеют значение NULL, верните пустой массив.

// Пример Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] вы должны вернуть [10, -65]
// Пример Для ввода [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14] вы должны вернуть [8, -50]

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || input.length <= 0) {
        return []
    } else {
        const positiveArr = [];
        const negativeArr = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === 0 && input.length === 1) {
                return []
            } else {
                if (input[i] > 0) {
                    positiveArr.push(input[i])
                } else if (input[i] < 0) {
                    negativeArr.push(input[i])
                }
            }
        }
        const a = positiveArr.filter(e => e > 0)
        let b = 0;
        for (let k = 0; k < negativeArr.length; k++) {
            b += negativeArr[k]
        }
        return [a.length, b];
    }
}

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
// console.log(countPositivesSumNegatives([]));
