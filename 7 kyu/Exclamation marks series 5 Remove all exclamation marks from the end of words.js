// Уберите все восклицательные знаки в конце слов. Слова разделяются одним пробелом. В слове нет восклицательных знаков.

// Примеры
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

function remove(string) {
    return string.replace(/(?<=!*)(?<=\w+)!*/gi, '')
}
