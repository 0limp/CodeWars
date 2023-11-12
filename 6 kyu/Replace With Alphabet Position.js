// Добро пожаловать.
// В этом ката вам необходимо по заданной строке заменить каждую букву ее позицией в алфавите.
// Если что-то в тексте не является буквой, проигнорируйте это и не возвращайте.
// "a" = 1, "b" = 2и т. д.

// Пример
// alphabetPosition("The sunset sets at twelve o' clock.")
// Должен вернуться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(как строка)


function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const str = text.toLowerCase().match(/[a-z]/gi);
    if (str) {
        return index = str.map(char => alphabet.indexOf(char) + 1).join(' ')
    } else {
        return '';
    }
}

function alphabetPosition2(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const str = text.toLowerCase().match(/[a-z]/gi);
    return str ? str.map(char => alphabet.indexOf(char) + 1).join(' ') : '';
}
