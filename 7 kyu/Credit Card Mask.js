// Обычно, когда вы что-то покупаете, вас спрашивают, верен ли номер вашей кредитной карты, номер телефона или ответ на ваш самый
// секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это отображалось на вашем экране.
// Вместо этого мы маскируем это.

// Ваша задача — написать функцию maskify, которая преобразует все символы, кроме последних четырех, в '#'.

// Примеры (вход --> вывод):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"


function maskify(cc) {
    return cc.slice(0, -4).map(e => e = '#').join('') + cc.slice(-4)
}
// console.log(maskify('64607935616'));
