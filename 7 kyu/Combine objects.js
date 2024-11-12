// Ваша задача — написать функцию, которая принимает два или более объекта и возвращает новый объект, объединяющий
// все входные объекты.

// Все свойства входного объекта будут иметь только числовые значения.Объекты объединяются вместе, так что значения
// совпадающих ключей суммируются.

// Пример:
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// Функция объединения должна быть добросовестной, поэтому не должна изменять входные объекты.

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine(...objs) {
    const result = {};
    for (let index = 0; index < objs.length; index++) {
        for (const [key, value] of Object.entries(objs[index])) {
            if (!result.hasOwnProperty(key)) {
                result[key] = value;
            } else {
                result[key] += value;
            }
        }
    }
    return result
}

