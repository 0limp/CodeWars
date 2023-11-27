// О, нет! Сообщается, что призраки наводнили город. Ваша задача — избавиться от них и спасти положение!
// В этой ката строки представляют здания, а пробелы внутри этих строк представляют призраков.
// И так, чего же ты ждешь? Верните здание(строку) без призраков(пробелов)!

// Пример:
// ghostBusters("Sky scra per");

// Должно вернуться:
// "Skyscraper"

// Если в здании нет призраков, верните строку:
// "You just wanted my autograph didn't you?"

function ghostBusters(building) {
    return /\s+/g.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?"
}