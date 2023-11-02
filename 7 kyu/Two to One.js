// Возьмите 2 строки s1 и s2 включайте только буквы от A до Z. Верните из функции новую отсортированную строку, максимальной длинны,
// удалить дубликаты исходящие из s1 или s2.

// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    return s1.concat(s2).split('').filter((e, i, arr) => arr.indexOf(e) === i).sort().join('')
}

// console.log(longest("aretheyhere", "yestheyarehere"));                              // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));        // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions"));                  // "acefghilmnoprstuy"