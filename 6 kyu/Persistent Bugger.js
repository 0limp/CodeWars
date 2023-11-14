// Напишите функцию , persistence которая принимает положительный параметр NUM и возвращает его мультипликативную устойчивость,
// которая представляет собой количество раз, которое вы должны умножить цифры NUM пока не дойдете до одной цифры.

// Например (Ввод -> Выход) :
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let count = 0;
    let result = String(num);
    if (result.length > 1) {
        while (result.length > 1) {
            result = result.split('').map(e => Number(e)).reduce((acc, i) => acc * i).toString()
            count++
        }
        return count
    } else {
        return 0
    }
}
