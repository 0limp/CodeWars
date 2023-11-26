// Вам дана строка слов и цифр. Извлеките выражение, включая:
// - оператор: либо сложение ("gains"), либо вычитание ("loses")
// - два числа, над которыми мы работаем
// Верните результат расчета.

// Примечания:
// "loses" и "gains" — единственные два слова, описывающие операторы
// Никаких долгов за фрукты и надкушенных яблок = числа целые и не отрицательные.

// Примеры
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40

function calculate(string) {
    const nums = string.match(/\d+/g).map(e => Number(e))
    return /loses/.test(string) ? nums.reduce((a, i) => a - i) : nums.reduce((a, i) => a + i)
}