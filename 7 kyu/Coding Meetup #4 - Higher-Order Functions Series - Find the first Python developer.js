// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP), представляющих данные о разработчиках, которые зарегистрировались
// для участия в следующей конференции по программированию, которую вы организуете. Список упорядочен в зависимости от того, кто
// зарегистрировался первым.

// Ваша задача — вернуть одну из следующих строк:

// < firstName here >, < country here > о первом подписавшемся разработчике Python; или
// There will be no Python developers если ни один разработчик Python не зарегистрировался.
// Например, учитывая следующий входной массив:

var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
// ваша функция должна вернуть Victoria, Puerto Rico.

// Примечания:
// Входной массив всегда будет действительным и отформатирован, как в примере выше.
//  `${item.firstName}, ${item.country}` 
// 'There will be no Python developers'

function getFirstPython(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]['language'] === 'Python') {
            return `${list[i].firstName}, ${list[i].country}`
        }
    }
    return 'There will be no Python developers'
}
