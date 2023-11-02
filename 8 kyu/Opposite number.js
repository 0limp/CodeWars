// Очень просто: по заданному целому числу или числу с плавающей запятой найдите его противоположность. 
// Примеры: 1: -1 14:-14 -34:34

function opposite1(number) {
    return number !== 0 ? -number : 0
}

function opposite(number) {
    return -number;
}
console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(-12525220.3325));