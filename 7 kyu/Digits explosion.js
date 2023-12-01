// Дана строка, состоящая из цифр [0-9], вернуть строку, в которой каждая цифра повторяется количество раз, равное ее значению.

// Примеры
// "312" should return "333122"
// "102269" should return "12222666666999999999"

function explode(s) {
    return s.replace(/\d/g, function (digit) {
        return digit.repeat(Number(digit))
    })
}
