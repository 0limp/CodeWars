// Вам будет предоставлено слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, верните средний символ.
// Если длина слова четная, верните 2 средних символа.

// #Примеры:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Вход
// Слово (строка) длины 0 < str < 1000(в некоторых тестовых примерах в javascript из-за ошибки в тестовых примерах вы можете получить
// немного больше 1000). Для этого вам не нужно проходить тестирование. Это сделано только для того, чтобы сообщить вам, что вам не
// нужно беспокоиться о тайм-ауте вашего решения.

// #Выход
// Средний символ(ы) слова, представленного в виде строки.


// 01 array
function getMiddle01(s) {
    return s.length % 2 === 0 ? s.split('').splice((s.length / 2) - 1, 2).join('') : s.split('').splice(Math.ceil((s.length / 2) - 1), 1).join('')
}
// 02 array
function getMiddle02(s) {
    if (s.length % 2 === 0) {
        return s.split('').splice((s.length / 2) - 1, 2).join('')
    } else {
        return s.split('').splice(Math.ceil((s.length / 2) - 1), 1).join('')
    }
}



// 01 substring()
function getMiddle03(s) {
    return s.length % 2 === 0 ? s.substring((s.length / 2) - 1, (s.length / 2) + 1) : s.substring(Math.ceil((s.length / 2) - 1), (s.length / 2) + 1)
}

// 02 substring()
function getMiddle(s) {
    if (s.length % 2 === 0) {
        return s.substring((s.length / 2) - 1, (s.length / 2) + 1)
    } else {
        return s.substring(Math.ceil((s.length / 2) - 1), (s.length / 2) + 1)
    }
}


console.log(getMiddle("test"));             // es
console.log(getMiddle("testing"));          // t
console.log(getMiddle("testwowting"));      // t
console.log(getMiddle("middle"));           // dd
console.log(getMiddle("A"));                // A