// Создайте функцию wordSearch(word,text), которая ищет, присутствует ли слово word в данной текстовой переменной.
// Обратите внимание, что это должно быть полное слово, что означает, что оно окружено word boundary (пробелы, 
// конец/начало строки, различные знаки препинания, ... ).

function wordSearch(word, text) {
    let regex = new RegExp(`\\b${word}\\b`, 'i')
    return regex.test(text)
}
