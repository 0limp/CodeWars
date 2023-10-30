// Количество гласных

// Возвращает количество гласных в заданной строке.
// Мы будем считать  A, E, I, O, U  гласными для этой Ката (но не Y)
// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount1(str) {
    const result = []
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const array = str.toLowerCase().split('');
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < vowel.length; k++) {
            if (array[i] === vowel[k]) {
                result.push(vowel[k])
            }
        }
    }
    return result.length
}


// console.log(getCount("abracadabra"));    // ==> 5
// console.log(getCount("Anyway"));         // ==> 2
// console.log(getCount("apple"));          // ==> 2
// console.log(getCount("About"));          // ==> 3
