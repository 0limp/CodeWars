// Просто, учитывая строку слов, верните длину самого короткого слова (слов). 
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
function findShort(s) {
    const a = s.split(' ').map((e) => e.length)
    const b = Math.min(...a)
    return b
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));                  // ==>  3
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));   // ==>  3
// console.log(findShort("Let's travel abroad shall we"));                                         // ==>  2  
