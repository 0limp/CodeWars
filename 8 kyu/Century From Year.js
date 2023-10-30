// Первое столетие охватывает от 1 года до 100 года включительно, второе столетие — от 101 года до 200 года включительно и т. д.
// Учитывая год, верните столетие, в котором он находится.
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    if (year % 100 === 0) {
        return year / 100
    } else {
        return Math.ceil(year / 100)
    }
}

// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(2000));
// console.log(century(89));
// console.log(century(362860));
