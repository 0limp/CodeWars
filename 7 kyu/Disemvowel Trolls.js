// Тролли атакуют ваш раздел комментариев!

// Распространенный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, из которой удалены все гласные.

// Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!».
// Примечание: для этой ката yне считается гласной.


// 'aeiou'
function disemvowel1(str) {
    return str.split('').filter(e => !'aeiouAEIOU'.includes(e)).join('')
}

function disemvowel(str) {
    const arr = str.split('');
    const filter = arr.filter((e) => {
        return !'aeiouAEIOU'.includes(e)
    })
    const result = filter.join('')
    return result
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
// console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"