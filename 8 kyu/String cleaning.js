// Ваш начальник решил сэкономить, купив недорогое программное обеспечение для оптического распознавания символов для сканирования текста старых
// романов в вашу базу данных. На первый взгляд кажется, что слова фиксируются нормально, но вы быстро замечаете, что в случайных местах текста
// вводится множество цифр.

// Примеры (ввод -> вывод)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Ваши измученные коллеги ждут от вас решения, позволяющего взять этот искаженный текст и удалить все цифры. Ваша программа примет строку, очистит
// все числовые символы и вернет строку с пробелами и специальными символами ~#$%^&!@*():;"'.,? без изменений.

function stringClean(s) {
    return s.replace(/[0-9]/g, '')
}

