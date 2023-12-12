// Задача
// Дан массив целых чисел, удалить наименьшее значение. Не изменяйте исходный массив/список. Если существует несколько элементов
// с одинаковым значением, удалите элемент с меньшим индексом. Если вы получили пустой массив/список, верните пустой массив/список.
// Не меняйте порядок оставшихся элементов.

// Input: [1,2,3,4,5], output = [2,3,4,5]
// Input: [5,3,2,1,4], output = [5,3,2,4]
// Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return []
    } else {
        const arr = [...numbers]
        const min = numbers.indexOf(Math.min(...numbers))
        arr.splice(min, 1)
        return arr
    }
}
