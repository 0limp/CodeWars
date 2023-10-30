// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке. 
// Примечание. Пустые массивы должны возвращать 0.

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        const sum = array.reduce((a, b) => a + b)
        return sum / array.length;
    }
}