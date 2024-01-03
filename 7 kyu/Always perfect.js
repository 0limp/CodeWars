// Просматривая Интернет, я нашел интересную математическую задачу под названием «Всегда идеально». Это означает, что если вы прибавите 1 к 
// произведению четырех последовательных чисел, ответом ВСЕГДА будет идеальный квадрат. Например, у нас есть: 1,2,3,4 и произведение будет
// 1X2X3X4=24. Если мы добавим 1 к произведению, получится 25, поскольку полученное число представляет собой полный квадрат, квадратный корень
// из 25 будет равен 5.

// Итак, теперь давайте напишем функцию, которая принимает числа, разделенные запятыми, в строковом формате и возвращает число, представляющее
// собой полный квадрат, и квадратный корень из этого числа.

// Если строка содержит символы, отличные от числа, или содержит более или менее 4 чисел, разделенных запятой, функция возвращает "incorrect input"
// Если строка содержит 4 числа, но не подряд, возвращается "not consecutive"


function checkRoot(string) {
    const array = string.split(',').map(e => Number(e))
    const [notConsecutive, incorrectInput] = ["not consecutive", "incorrect input"]
    const isConsecutive = array.every((e, i, arr) => i !== array.length - 1 ? arr[i + 1] === e + 1 : true);

    if (array.length !== 4 || array.includes(NaN) || array.includes(0)) {
        return incorrectInput
    }

    if (isConsecutive) {
        const reduce = array.reduce((a, i) => a * i)
        return `${reduce + 1}, ${Math.sqrt(reduce + 1)}`
    } else {
        return notConsecutive
    }
}


// console.log(checkRoot('4,5,6,7'));
// console.log(checkRoot('4,5,7,8'));
// console.log(checkRoot('4,5,s,8'));
// console.log(checkRoot('12,13,14,15'));
// console.log(checkRoot('11,13,14,15'));
// console.log(checkRoot("0,1,2,3"));
