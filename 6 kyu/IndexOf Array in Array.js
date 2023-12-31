// * indexOf в JavaScript не работает с массивами в качестве входных данных. Это связано с тем, что [1,2] === [1,2] вернет false в JavaScript.
// * Многие другие языки имеют схожие особенности.

// * Однако иногда бывает полезно найти массив. Напишите функцию, которая ищет массив внутри двумерного массива и возвращает индекс первого
// * совпадающего элемента. Если совпадения нет, ваша функция должна вернуть -1.

// : См. несколько примеров:
// ? - var arrayToSearch = [[1,2],[3,4],[5,6]];
// ? - var query = [1,2];                           // => 0
// ? - query = [5,6];                               // => 2
// ? - query = [9,2];                               // => -1

// * Вам необходимо будет проверить введенные данные по следующим критериям:
// ? 1. каждый элемент искомого массива должен быть массивом;
// ? 2. каждый подмассив в двумерном массиве должен иметь длину два;
// ? 3. запрос должен представлять собой массив длиной два.

// ! Если входные данные недействительны, вы должны выдать ошибку.
// : См. несколько примеров:
// ? - var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]];     // => throw Error
// ? - arrayToSearch = [1,2,3,4,5,6];                       // => throw Error
// ? - arrayToSearch = [[1,2],[3,4],[5,6]];                 // => valid input
// ? - var query = [1,2];                                   // => valid input
// ? - query = 5;                                           // => throw Error
// ? - query = [9,2,1];                                     // => throw Error

const bigArray = [[2, 3], [7, 2], [9, 20], [1, 2], [7, 2], [45, 4], [7, 87], [4, 5], [2, 7], [6, 32]];
const searchFor = [45, 4];

const searchArray = (arrayToSearch, query) => {
    if (arrayToSearch.some(e => e.length !== 2) || query.length !== 2) {
        throw Error()
    } else {
        for (let i = 0; i < arrayToSearch.length; i++) {
            if (query[0] === arrayToSearch[i][0] && query[1] === arrayToSearch[i][1]) {
                return i
            }
        }
    }
    return -1
}
// console.log(searchArray(bigArray, searchFor));