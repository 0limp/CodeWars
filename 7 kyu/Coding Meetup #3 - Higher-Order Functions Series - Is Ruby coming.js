// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP), представляющих данные о разработчиках, которые зарегистрировались
// для участия в следующей конференции по программированию, которую вы организуете.

// Ваша задача вернуть:
// - true если зарегистрирован хотя бы один Ruby-разработчик; или
// - false если не будет разработчиков Ruby.

// Например, учитывая следующий входной массив:
var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
// ваша функция должна вернуть true.

// Примечания:
// Входной массив всегда будет действительным и отформатирован, как в примере выше.

function isRubyComing(list) {
    return list.some(({ language }) => language === 'Ruby')
}

