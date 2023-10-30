// Суть этой ката заключается в умножении заданного числа на восемь, если оно четное, и на девять в противном случае.
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}
// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(1));
// console.log(simpleMultiplication(8));
// console.log(simpleMultiplication(4));
// console.log(simpleMultiplication(5));
