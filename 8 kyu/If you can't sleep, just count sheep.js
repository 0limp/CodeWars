// Если не можешь заснуть, просто посчитай овец!! 
// Задача: Учитывая неотрицательное целое число, например 3, верните строку с бормотанием: «1 овца...2 овцы...3 овцы...». 
// Ввод всегда будет действительным, т. е. без отрицательных целых чисел.  
var countSheep = function (num) {
    let str = '';
    if (num < 0) {
        return '';
    } else if (num === 0) {
        return '';
    } else {
        let sheep = 'sheep...'
        for (let i = 0; i < num; i++) {
            str += `${i + 1} ${sheep}`
        }
        return str
    }
}
// console.log(countSheep(1));
// console.log(countSheep(7));
// console.log(countSheep(3));
// console.log(countSheep(10));
