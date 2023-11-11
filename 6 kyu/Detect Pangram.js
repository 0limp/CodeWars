// Панграмма – это предложение, которое содержит каждую букву алфавита хотя бы один раз. Например, предложение «Быстрая бурая лиса прыгает
// через ленивого пса» является панграммой, поскольку в нем хотя бы один раз используются буквы AZ (регистр не имеет значения).

// Учитывая строку, определите, является ли она панграммой. Возвращайте True, если это так, и False, если нет. Не обращайте внимания на цифры
// и знаки препинания.
var string = "The quick brown fox jumps over the lazy dog."

function isPangram(string) {
    let count = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arrStr = string.toLowerCase().split(' ');
    for (let i = 0; i < alphabet.length; i++) {
        for (let k = 0; k < arrStr.length; k++) {
            if (arrStr[k].includes(alphabet[i])) {
                count.push(alphabet[i]);
                break; // выход из цикла при совпадении
            }
        }
    }
    return count.length === 26;
}


// console.log(isPangram(string));