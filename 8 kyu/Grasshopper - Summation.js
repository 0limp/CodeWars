// Суммирование Напишите программу, которая находит сумму всех чисел от 1 до num.
// Число всегда будет положительным целым числом, большим 0. 
// Например (Ввод -> Выход):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
    const arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    const sum = arr.reduce((a, i) => a + i)
    return sum
}

// console.log(summation(1));
// console.log(summation(2));
// console.log(summation(8));