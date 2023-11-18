// Классные классы
// Базовые классы, это ката в основном нацелено на новое обновление JS ES6, представляющее классы.

// Задача
// Ваша задача — завершить этот Класс, класс Человек создан. Вы должны заполнить метод Constructor, чтобы принять имя в виде
// строки и возраст в виде числа, заполнить свойство get Info и метод getInfo/получатель информации, который должен возвращатьjohns age is 34

// Ссылка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return `${this.name}s age is ${this.age}`
    }
}