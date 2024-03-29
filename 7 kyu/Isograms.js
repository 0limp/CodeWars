// # Isograms

// Изограмма – это слово, в котором нет повторяющихся букв, как последовательных, так и непоследовательных.
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
// Предположим, что пустая строка является изограммой. Не обращайте внимания на регистр букв.

function isIsogram1(str) {
    const array = str.toLowerCase().split('');
    for (let i = 0; i < array.length; i++) {
        let index = array.indexOf(array[i], i + 1)
        if (index !== -1) {
            return false
        }
    }
    return true;
}