// В этом упражнении методу передается строка, и должна быть возвращена новая строка с первым символом каждого слова в строке.

// Например:
// "This Is A Test" ==> "TIAT"
// Строки будут содержать только буквы и пробелы, с ровно одним пробелом между словами и без пробелов в начале/конце.

function makeString(s) {
    return s.match(/\b\w/g).join('')
}
