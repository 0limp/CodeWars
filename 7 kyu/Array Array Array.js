// Вам дан исходный массив из двух значений (x). Вы будете использовать это для подсчета очков.

// Если оба значения в (x) являются числами, оценка представляет собой сумму двух. Если только один из них является числом, счет
// равен этому числу. Если ни одно из них не является числом, верните «Void!».

// Получив оценку, вы должны вернуть массив массивов. Каждый подмассив будет таким же, как (x), а количество подмассивов должно
// равняться счету.

// Например:
// if (x) == ['a', 3] вы должны вернуть [['a', 3], ['a', 3], ['a', 3]].


function explode(x) {
    const arr = []
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number' && typeof x[i + 1] === 'number') {
            const sum = x.reduce((a, i) => a + i)
            for (let k = 0; k < sum; k++) {
                arr.push(x)
            }
            return arr
        } else if (typeof x[i] === 'number' && typeof x[i + 1] === 'string') {
            for (let k = 0; k < x[i]; k++) {
                arr.push(x)
            }
            return arr
        } else if (typeof x[i] === 'string' && typeof x[i + 1] === 'number') {
            for (let k = 0; k < x[i + 1]; k++) {
                arr.push(x)
            }
            return arr
        } else if (typeof x[i] === 'string' && typeof x[i + 1] === 'string') {
            return 'Void!'
        }
    }
}
