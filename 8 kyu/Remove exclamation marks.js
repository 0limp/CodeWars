//  Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.
function removeExclamationMarks(s) {
    return s.split('').filter((e) => e !== '!').join('');
}

// console.log(removeExclamationMarks("H!e!l!l!o W!o!r!l!d!"));
