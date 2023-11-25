// Реализовать String#digit? (в Java StringUtils.isDigit(String)), который должен возвращать true,
// если данный объект является цифрой (0- 9), false иначе.


String.prototype.digit = function () {
    return /^[\d]$/.test(this)
};
