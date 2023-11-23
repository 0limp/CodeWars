// Подсчитайте количество дубликатов
// Напишите функцию, которая будет возвращать количество различных без учета регистра буквенных символов и числовых цифр,
// встречающихся более чем один раз во входной строке. Можно предположить, что входная строка содержит только буквы алфавита
// (как прописные, так и строчные) и числовые цифры.

// Пример
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    text = text.toLowerCase()
    const obj = {}
    let duplicates = 0;
    for (const char of text) {
        let count = 0;
        let index = text.indexOf(char)
        while (index !== -1) {
            count++;
            index = text.indexOf(char, index + 1)
        }
        if (count > 1) {
            obj[char] = count
        }
    }
    for (const key in obj) {
        duplicates++
    }
    return duplicates
}


