// Nothing special

// Пресловутый капитан Шнайдер дал вам очень простую миссию. Любые данные, поступающие через систему, гарантируют, что свет
// увидят только неспециальные символы.

// Создайте функцию, которая, учитывая строку, сохраняет только буквы AZ (верхние и строчные), цифры 0–9 и символы пробелов.
// Кроме того, возвращает «Не строка!» если тип записи не является строкой.

function nothingSpecial(str) {
    return typeof str === 'string' ? str.replace(/[^a-z0-9\s]/gi, '') : "Not a string!"
}

console.log(nothingSpecial("Hello World!"))                     //  "Hello World");
console.log(nothingSpecial("%^Take le$ft ##quad%r&a&nt"))       //  "Take left quadrant");
console.log(nothingSpecial("M$$$$$$$y ally!!!!!"))              //  "My ally");
console.log(nothingSpecial(25))                                 //  "Not a string!");

