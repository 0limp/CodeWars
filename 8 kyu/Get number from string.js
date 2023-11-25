// Напишите функцию, которая удаляет из строки все нецифровые символы и преобразует оставшиеся в числа. 
// Например: «hell5o wor6ld» -> 56 Функция: getNumberFromString(s)

function getNumberFromString1(s) {
    return Number(s.match(/\d/g).join(''))
}

function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ''))
}
