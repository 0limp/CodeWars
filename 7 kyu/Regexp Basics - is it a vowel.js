// Реализуйте функцию, которая должна возвращать true, если данный объект является гласной
// (что означает a, e, i, o, u, верхний или нижний регистр), и false в противном случае.

String.prototype.vowel = function () {
    return /^[aeiou]$/i.test(this);
}
