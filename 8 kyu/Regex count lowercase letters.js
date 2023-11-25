// Ваша задача — просто подсчитать общее количество строчных букв в строке.

// Примеры:
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26



function lowercaseCount(str) {
    return str.match(/[a-z]/g) !== null ? str.match(/[a-z]/g).length : 0;
}