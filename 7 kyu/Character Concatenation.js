// Учитывая строку, вам необходимо постепенно объединить первую букву слева и первую букву справа и «1», затем вторую букву слева и вторую букву
// справа и «2» и так далее. Если длина строки нечетная, отбросьте центральный элемент.
// Например:
// charConcat("abcdef")     ==  'af1be2cd3'
// charConcat("abc def")    ==  'af1be2cd3' // same result
// charConcat("CodeWars")   ==  'Cs1or2da3eW4' // same result
function charConcat(string) {
    const arr = [];
    const a = string.split('')
    for (let i = 1; i <= string.length / 2; i++) {
        arr.push(...a.splice(0, 1))
        arr.push(...a.splice(-1, 1))
        arr.push(i)
    }
    return arr.join('')
}

// console.log(charConcat("CodeWars"));                // Cs1or2da3eW4
// console.log(charConcat("abc def"));                 // af1be2cd3
// console.log(charConcat("CodeWars Rocks"));          // Cs1ok2dc3eo4WR5a 6rs7