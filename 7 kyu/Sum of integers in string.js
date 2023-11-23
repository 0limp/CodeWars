// Ваша задача в этом ката — реализовать функцию, которая вычисляет сумму целых чисел внутри строки. 
// Например, в строке "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog" сумма целых чисел равна 3635.

// Примечание. Будут проверяться только положительные целые числа.

function sumOfIntegersInString(s) {
    const matches = s.match(/\d+/g);
    if (matches) {
        return matches.map(e => Number(e)).reduce((a, i) => a + i, 0)
    } else {
        return 0
    }
}
