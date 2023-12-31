// Полное имя человека обычно состоит из имени, отчества и фамилии; однако в некоторых культурах (например, в Южной Индии) может быть более
// одного второго имени.

// Напишите функцию, которая принимает полное имя человека и возвращает инициалы, разделенные точками ('.'). Инициалы должны быть в верхнем
// регистре. Фамилия человека должна быть указана полностью, а также первая буква в верхнем регистре.

// См. образец ниже:
// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Имена в полном имени разделяются ровно одним пробелом (' ' ); без начальных и конечных пробелов. Имена всегда будут в нижнем регистре, за
// исключением первой буквы (необязательно).

function initials(n) {
    return n.split(' ').map((e, i, arr) =>
        i !== arr.length - 1
            ? e.slice(0, 1).toUpperCase() + '.'
            : e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()
    ).join('')
}

