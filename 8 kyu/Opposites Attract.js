// Тимми и Сара думают, что влюблены, но будут ли они вместе, они узнают об этом только тогда, когда сорвут каждый по цветку.
// Если у одного цветка четное количество лепестков, а у другого нечетное, это означает, что они влюблены. 

// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.
function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 1 && flower2 % 2 === 0 || flower1 % 2 === 0 && flower2 % 2 === 1) {
        return true
    } else {
        return false
    }
}
// console.log(lovefunc(1, 4));    // ==>  true
// console.log(lovefunc(2, 2));    // ==>  false
// console.log(lovefunc(0, 1));    // ==>  true
// console.log(lovefunc(0, 0));    // ==>  false
