// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без
// каких-либо элементов с одинаковым значением рядом друг с другом и сохраняет исходный порядок элементов.

// Например:
// uniqueInOrder('AAAABBBCCDAABBB')         // == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')                 // == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3])           // == [1,2,3]

var uniqueInOrder = function (iterable) {
    const arr = [...iterable];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}
