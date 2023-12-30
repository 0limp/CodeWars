// Создайте функцию под названием shortcut для удаления строчных гласных (a, e, i, o, u) в заданной строке.
function shortcut(string) {
    return string.replace(/[aeiou]/g, '')
}