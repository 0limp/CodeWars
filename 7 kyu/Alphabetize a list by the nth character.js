// Напишите функцию, которая принимает два параметра:
// 1. строку (содержащую список слов) и
// 2. целое число (n).
// Функция должна отсортировать список слов по n-ой букве каждого слова.

// Сравнение букв должно быть нечувствительным к регистру. Если буквы одинаковы, то слова должны быть отсортированы
// в обычном лексикографическом порядке, также нечувствительному к регистру.

function sortIt(list, n) {
    const array = list.split(',').map(e => e.trim());

    return array.sort((a, b) => {
        const charA = a.toLowerCase().charCodeAt(n - 1)
        const charB = b.toLowerCase().charCodeAt(n - 1)

        if (charA === charB) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
        if (charA > charB) {
            return 1
        }
        return -1

    }).join(', ');
}
