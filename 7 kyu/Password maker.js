// Один из советов по созданию удовлетворительного пароля — начать с запоминающейся фразы или предложения и создать пароль, извлекая первую букву
// каждого слова.

// Еще лучше заменить некоторые из этих букв цифрами (например, букву O можно заменить цифрой 0):
// - вместо включения i или I введите в пароль число 1;
// - вместо включения o или O введите в пароль число 0;
// - вместо включения s или S введите в пароль число 5.

// Примеры:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"
function makePassword(phrase) {
    return phrase.match(/\b\w/gi).join('').replace(/[ois]/gi, (letter) => {
        return {
            'o': '0',
            'i': '1',
            's': '5'
        }[letter.toLowerCase()]
    })
}

// console.log(makePassword("Give me liberty or give me death"));      // ==>    Gml0gmd
// console.log(makePassword("Keep Calm and Carry On"));                // ==>    KCaC0