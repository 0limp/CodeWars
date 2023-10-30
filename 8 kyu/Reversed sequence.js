// Создайте функцию, которая возвращает массив целых чисел от N до 1, где N > 0.
// Пример: n = 5 --> [5,4,3,2,1]
const reverseSeq = n => {
    const arr = [];
    const length = n;
    for (let i = 0; i < length; i++) {
        arr.push(n--)
    }
    return arr;
};
