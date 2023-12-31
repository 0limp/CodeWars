// Ваша задача — удалить из строки все повторяющиеся ( дубликаты ) слова, оставив только отдельные (первые) слова.

// Пример:
// Вход:    'альфа бета бета гамма гамма гамма гамма дельта альфа бета бета гамма гамма гамма гамма дельта'
// Выход:   'альфа-бета-гамма-дельта'

function removeDuplicateWords1(s) {
    return s.split(' ').filter((e, i, arr) => arr.indexOf(e) === i).join(' ')
}

function removeDuplicateWords2(s) {
    const set = new Set(s.split(' '));
    const result = Array.from(set).join(' ');
    return result
}

function removeDuplicateWords(s) {
    let stringArray = s.split(" ");                 // массив
    let filteredArray = [];                         // отфильтрованный массив

    for (let elem of stringArray) {                 // цикл
        if (!filteredArray.includes(elem)) {        // если отфильтрованный массив не содержит искомый елемент
            filteredArray.push(elem)                // пушим елемент
        }
    }

    return filteredArray.join(" ")
};

function removeDuplicateWords4(s) {
    return s.replace(/\b([a-z]+)\b\s(?=.*\b\1\b)/g, '')
}
