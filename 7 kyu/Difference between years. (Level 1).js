// Напишите функцию, которая принимает две строки в качестве параметра. Эти строки имеют следующий формат даты: YYYY/MM/DD.
// Ваша задача: взять years и вычислить разницу между ними.

// Примеры:
// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

var howManyYears = function (date1, date2) {
    return Math.abs(Number(date1.match(/^[\d]{4}/)) - Number(date2.match(/^[\d]{4}/)))
}
