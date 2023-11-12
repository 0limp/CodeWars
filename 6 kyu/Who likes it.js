// Вы, наверное, знаете систему лайков по Facebook и другим страницам. Люди могут ставить лайки постам в блогах, изображениям и другим элементам.
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.

// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился предмет. Он должен возвращать отображаемый текст, как
// показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Примечание. При наличии 4 и более имен число "and 2 others"просто увеличивается.

function likes(names) {
    [a, b, ...other] = names;
    if (names.length >= 4) {
        return `${a}, ${b} and ${other.length} others like this`
    } else if (names.length === 3) {
        return `${a}, ${b} and ${other} like this`
    } else if (names.length === 2) {
        return `${a} and ${b} like this`
    } else if (names.length === 1) {
        return `${a} likes this`
    } else {
        return "no one likes this"
    }
}
