// Возьмите массив и удалите из него каждый второй элемент. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента. 
function removeEveryOther(arr) {
    return arr.filter((e, i) => i % 2 === 0)
}
