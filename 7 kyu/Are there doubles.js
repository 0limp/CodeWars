// Ваша задача — создать функцию, которая определяет, есть ли в строке двойные символы (включая символы пробелов). Например, aa, !! или   .
// Вы хотите, чтобы функция возвращала true, если строка содержит двойные символы, и false в противном случае. Тест не должен быть чувствителен
// к регистру; например, оба aa & aA вернет true.

function doubleCheck1(str) {
    return /(.)\1/gi.test(str)
}


