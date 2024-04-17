// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми.
// Если массив не содержит чисел, вы должны вернуть 0.

function sum(numbers) {
    return numbers.length > 0 ? numbers.reduce((a, i) => a + i) : 0
};