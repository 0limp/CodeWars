// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти его!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// Гарантируется, что массив содержит не менее 3 чисел.
// Тесты содержат очень огромные массивы, поэтому подумайте о производительности.

function findUniq(arr) {
    arr.sort((a, b) => a - b)
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}
