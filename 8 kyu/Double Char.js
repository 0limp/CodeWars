// Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
// Примеры (Ввод -> Выход):
// "String"         ->   "SSttrriinngg"
// "Hello World"    ->   "HHeelllloo  WWoorrlldd"
// "1234!_ "        ->   "11223344!!__  "
function doubleChar(str) {
    let string = '';
    for (let i = 0; i < str.length; i++) {
        string += str[i] + str[i]
    }
    return string
}
// console.log(doubleChar("abcd"));        // ==>  aabbccdd
// console.log(doubleChar("Adidas"));      // ==>  AAddiiddaass

