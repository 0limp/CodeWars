// Банкоматы допускают использование 4- или 6-значных PIN-кодов, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
// Если функции передана действительная строка PIN-кода, верните true, иначе верните false.

function validatePIN(pin) {
    return /(^[\d]{4}$)|(^[\d]{6}$)/.test(pin)
}
