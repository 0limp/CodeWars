// Учитывая строку слов, вам нужно найти слово с наибольшим количеством очков.
// Каждая буква слова набирает очки в зависимости от ее положения в алфавите a = 1, b = 2, c = 3и т. д.
// Например, оценка равна abad( 81 + 2 + 1 + 4).
// Вам нужно вернуть слово с наивысшим баллом в виде строки.
// Если два слова имеют одинаковую оценку, верните слово, которое встречается первым в исходной строке.
// Все буквы будут строчными, и все вводимые данные будут действительными.

function high(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arr = x.split(' ')
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const letterArr = []
        for (let k = 0; k < arr[i].length; k++) {
            let index = alphabet.indexOf(arr[i][k])
            letterArr.push(index + 1)
        }
        newArr.push(letterArr.reduce((a, i) => a + i))
    }
    const max = Math.max(...newArr)
    const indexMax = newArr.indexOf(max)
    return arr[indexMax]
}
