// Реализовать String#hex_number? (в Java StringUtils.isHexNumber(String)), который должен возвращать true, если данный объект
// является шестнадцатеричным числом, и false в противном случае. Шестнадцатеричные числа состоят из одной или нескольких цифр
// в диапазоне 0–9 A–F (в любом случае), опционально с префиксом 0x.

String.prototype.hexNumber = function () {
    return /^(0(x|X))?[\da-f]+$/i.test(this)
}