// Вы пишете код для управления светофорами вашего города.
// Вам нужна функция для обработки каждого изменения с зеленого на желтый, на красный, а затем снова на зеленый.
// Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние источника света,
// и возвращает строку, представляющую состояние, в которое должен перейти источник света. Например, если вход зеленый, выход должен быть желтым.
function updateLight(current) {
    const obj = {
        green: "yellow",
        yellow: "red",
        red: "green"
    }
    for (const key in obj) {
        if (key === current) {
            return obj[key]
        }
    }
}

const updateLight2 = (current) => {
    return {
        red: 'green',
        yellow: 'red',
        green: 'yellow'
    }[current];
}

function updateLight3(current) {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        default:
            return 'green';
    }
}

// console.log(updateLight("green"));          // ==>      "yellow"
// console.log(updateLight("yellow"));         // ==>      "red"
// console.log(updateLight("red"));            // ==>      "green"
