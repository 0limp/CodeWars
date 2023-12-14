// DropCaps означает, что первая буква начального слова абзаца должна быть написана заглавными буквами, а остальные — строчными,
// как в газете.

// Но для разнообразия давайте сделаем это для каждого слова данной строки. Ваша задача — писать с заглавной буквы каждое слово,
// длина которого превышает 2, оставляя меньшие слова такими, какие они есть.

// должно также работать с ведущими и конечными пробелами и заглавными буквами.

function dropCap(n) {
    return n.replace(/(\b[\w]{3,}\b)/g, (match) => match.slice(0, 1).toUpperCase() + match.slice(1).toLowerCase())
}