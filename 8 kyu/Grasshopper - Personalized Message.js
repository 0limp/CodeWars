// Создайте функцию, которая выдает персонализированное приветствие. 
// Эта функция принимает два параметра: имя и владельца. 

// Используйте условные выражения, чтобы вернуть правильное сообщение:
//              case	                    return
//          имя равно владельцу         'Hello boss'
//          в противном случае	        'Hello guest'

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}
// console.log(greet('Daniel', 'Daniel'));   // ==>    'Hello boss'
// console.log(greet('Greg', 'Daniel'));     // ==>    'Hello guest'
