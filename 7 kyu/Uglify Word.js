// Краткое содержание
// В этом ката вам нужно создать функцию с именем uglify_word (uglifyWord в Java и Javascript). Он принимает строковый параметр.

// Что делает uglify_word?
// Он проверяет символ в заданной строке спереди с помощью итерации, на итерации он выполняет следующие шаги:

// Есть флаг, и он будет запущен с 1.
// Проверьте текущий символ в индексе итерации.
// Если это символ алфавита [a-zA-Z] и значение флага равно 1, измените этот символ на верхний регистр.
// Если это символ алфавита [a-zA-Z] и значение флага равно 0, измените этот символ на нижний регистр.
// Иначе, если это не символ алфавита, установите значение флага 1.
// Если текущий символ является символом алфавита, выполните логическую операцию not над флагом.
// После завершения итерации верните фиксированную строку, которая могла быть изменена в такой итерации.

// Примеры
// uglify_word("aaa") === "AaA"
// uglify_word("AAA") === "AaA"
// uglify_word("BbB") === "BbB"
// uglify_word("aaa-bbb-ccc") === "AaA-BbB-CcC"
// uglify_word("AaA-BbB-CcC") === "AaA-BbB-CcC"
// uglify_word("eeee-ffff-gggg") === "EeEe-FfFf-GgGg"
// uglify_word("EeEe-FfFf-GgGg") === "EeEe-FfFf-GgGg"
// uglify_word("qwe123asdf456zxc") === "QwE123AsDf456ZxC"
// uglify_word("Hello World") === "HeLlO WoRlD"

function uglifyWord(s) {

}

console.log(uglifyWord("aaa"));                     // ===> "AaA");
console.log(uglifyWord("AAA"));                     // ===> "AaA");
console.log(uglifyWord("aaa-bbb-ccc"));             // ===> "AaA-BbB-CcC");
console.log(uglifyWord("BbB"));                     // ===> "BbB");
console.log(uglifyWord("AaA-BbB-CcC"));             // ===> "AaA-BbB-CcC");
console.log(uglifyWord("eeee-ffff-gggg"));          // ===> "EeEe-FfFf-GgGg");
console.log(uglifyWord("EeEe-FfFf-GgGg"));          // ===> "EeEe-FfFf-GgGg");
console.log(uglifyWord("qwe123asdf456zxc"));        // ===> "QwE123AsDf456ZxC");
console.log(uglifyWord("Hello World"));             // ===> "HeLlO WoRlD");