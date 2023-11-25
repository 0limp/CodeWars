// Завершите функцию, которая принимает строковый параметр и меняет местами каждое слово в строке.
// Все пробелы в строке должны быть сохранены.

// Примеры:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(e => e.split('').reverse().join('')).join(' ')
}

