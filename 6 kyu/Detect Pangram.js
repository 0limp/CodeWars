// Панграмма – это предложение, которое содержит каждую букву алфавита хотя бы один раз. Например, предложение «Быстрая бурая лиса прыгает
// через ленивого пса» является панграммой, поскольку в нем хотя бы один раз используются буквы AZ (регистр не имеет значения).

// Учитывая строку, определите, является ли она панграммой. Возвращайте True, если это так, и False, если нет. Не обращайте внимания на цифры
// и знаки препинания.

function isPangram(string) {
    let count = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const arrStr = string.toLowerCase().split(' ').join('').split('')
    for (let i = 0; i < alphabet.length; i++) {
        for (let k = 0; k < arrStr.length; k++) {
            if (alphabet[i] === arrStr[k]) {
                count.push(alphabet[i])
                continue
            }
        }
    }
    const find = count.filter((e, i, arr) => arr.indexOf(e) === i)
    if (find.length >= 26) {
        return true
    } else {
        return false
    }
}