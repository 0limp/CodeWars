// Напишите функцию vowel2index(str) который принимает строку и заменяет все гласные [a,e,i,o,u] соответствующими позициями в этой строке.

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
//  == ''
// Ваша функция должна быть нечувствительна к регистру гласных.


function vowel2index(str) {
    return str.replace(/[aeiou]/gi, (vowel, index) => index + 1)
}

