// Напишите функцию, которая возвращает индекс первого появления слова «Wally». «Wally»; не должно быть частью другого слова,
// но за ним может следовать знак препинания. Если нет такого «Wally»; существует, верните -1.

function wheresWally(string) {
    return string.search(/(?<![^ ])Wally\b/)
}
