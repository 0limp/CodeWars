// Ваша задача — преобразовать строки так, как их написал Джейден Смит. Строки представляют собой настоящие цитаты Джейдена Смита,
// но они не пишутся с заглавной буквы так, как он их первоначально напечатал.

// Пример:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


var str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
    return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
};

// str.toJadenCase();
