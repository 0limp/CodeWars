// Напишите функцию которая получает два параметра. Первый параметр, «employed», имеет значение true, когда вы работаете, а второй параметр, 
// «vacation», истинен, когда вы находитесь в отпуске.
// Функция должна возвращать значение true, если вы работаете, а не в отпуске (поскольку именно при таких обстоятельствах вам необходимо
// установить будильник). В противном случае он должен вернуть false.

// Примеры:
// ! employed | vacation
// ! трудоустроенный | отпуск
// ? true     | true     => false
// ? true     | false    => true
// ? false    | true     => false
// ? false    | false    => false


function setAlarm(employed, vacation) {
    return employed && vacation || employed === false && vacation || employed === false && vacation === false ? false : true
}


// console.log(setAlarm(true, true));      // ==>  false
// console.log(setAlarm(false, true));     // ==>  false
// console.log(setAlarm(true, false));     // ==>  true
