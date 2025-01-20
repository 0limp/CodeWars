// Удалите круглые скобки
// В этой ката вам дана строка, например:
// "example(unwanted thing)example"

// Ваша задача — удалить все, что находится внутри скобок, а также сами скобки.
// Пример выше вернет:
// "exampleexample"


// Примечания
// Кроме круглых скобок в строке могут встречаться только буквы и пробелы. Не беспокойтесь о других скобках,
// таких как "[]" и "{}", поскольку они никогда не появятся.
// Круглых скобок может быть несколько.
// Круглые скобки могут быть вложенными.

function removeParentheses(s) {
    return s.replace(/(.*?)(?:\(.*\))(.*?)/, '$1$2')
}

console.log(removeParentheses("example(unwanted thing)example"));                           // "exampleexample"
// console.log(removeParentheses("a (bc d)e"));                                             // "a e"
console.log(removeParentheses("a(b(c))"));                                                  // "a"
// console.log(removeParentheses("hello example (words(more words) here) something"));      // "hello example  something"
console.log(removeParentheses("(first group) (second group) (third group)"));               // "  "
