// Заменить каждую букву в заданной строке на следующую букву алфавита. Функция принимает один параметр s (строку).

// Примечания:
// Пробелы и специальные символы должны оставаться прежними.
// Заглавные буквы должны переноситься таким же образом, но остаются заглавными.

function nextLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.replace(/[a-z]/gi, function (letter) {
        const index = alphabet.indexOf(letter)
        const nextIndex = index + 1
        return (nextIndex === alphabet.length || nextIndex === alphabet.length / 2)
            ? alphabet[nextIndex - alphabet.length / 2]
            : alphabet[nextIndex];
    })
}
