// Напишите функцию, которая принимает строку, состоящую из одного или нескольких слов, и возвращает ту же строку, но со всеми пятью или
// более буквами слов в обратном порядке (точно так же, как название этой ката). Передаваемые строки будут состоять только из букв и
// пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.

// Примеры:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords1(string) {
    const arr = string.split(' ');
    const res = arr.map(e => {
        if (e.length < 5) {
            return e
        } else {
            return e.split('').reverse().join('')
        }
    })
    return res.join(' ')
}

// short version
function spinWords(string) {
    return string.split(' ').map(e => (e.length < 5) ? e : e.split('').reverse().join('')).join(' ')
}
