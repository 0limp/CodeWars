// Когда воин хочет поговорить с другим о мире или войне, он использует смартфон. В одной отдельной стране воинам, которые все
// время занимались ката, не всегда хватало денег. Поэтому, если они звонят на какой-то номер, они хотят знать, какой оператор
// обслуживает этот номер.

// Напишите функцию, которая принимает число и возвращает имя оператора или строку «нет информации», если оператор не может
// быть определенный. число всегда выглядит как 8yyyxxxxxxx, где yyy соответствует оператору.

// Вот краткий список операторов:
// 039 ххх хх хх - Голден Телеком
// 050 ххх хх хх - МТС
// 063 ххх хх хх - Life:)
// 066 ххх хх хх - МТС
// 067 ххх хх хх - Киевстар
// 068 ххх хх хх - Билайн
// 093 ххх хх хх - Life:)
// 095 ххх хх хх - МТС
// 096 ххх хх хх - Киевстар
// 097 ххх хх хх - Киевстар
// 098 ххх хх хх - Киевстар
// 099 xxx xxx xx - Тест МТС [Просто верните «МТС»]

function detectOperator(a) {
    const code = a.toString().split('').slice(1, 4).join('')
    const mask = a.toString().match(/ /g)
    return code
}

console.log(detectOperator(80931551119))        // "Life:)
console.log(detectOperator(8011155117711))      // "no info