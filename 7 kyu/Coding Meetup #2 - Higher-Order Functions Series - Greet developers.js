// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP, таблицы в COBOL), представляющих данные о разработчиках, которые
// подписались на участие в следующей встрече по программированию, которую вы организуете.

// Ваша задача — вернуть массив, в котором каждый объект будет иметь новое свойство 'greeting' со следующим строковым значением:
// Привет < firstName здесь >, что вам больше всего нравится в < язык здесь >?

// Например, учитывая следующий входной массив:
var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

// ваша функция должна возвращать следующий массив:
[
    {
        firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
        greeting: 'Hi Sofia, what do you like the most about Java?'
    },
    {
        firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
        greeting: 'Hi Lukas, what do you like the most about Python?'
    },
    {
        firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
        greeting: 'Hi Madison, what do you like the most about Ruby?'
    }
];

// Примечания:

// Порядок свойств объектов не имеет значения (кроме COBOL).
// Входной массив всегда будет действительным и отформатирован, как в примере выше


function greetDevelopers(list) {
    return list.map(({ firstName, language, ...rest }) => ({
        firstName,
        ...rest,
        language,
        greeting: `Hi ${firstName}, what do you like the most about ${language}?`
    }));
}
