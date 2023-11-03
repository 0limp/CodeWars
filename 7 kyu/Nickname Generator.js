// Генератор псевдонимов
// Напишите функцию, nicknameGeneratorкоторая принимает строковое имя в качестве аргумента и возвращает первые 3 или 4 буквы в качестве ника.

// Если 3-я буква согласная, верните первые 3 буквы.
// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"

// Если третья буква гласная, верните первые 4 буквы.
// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// Если строка меньше 4 символов, верните «Ошибка: имя слишком короткое».

// Примечания:
// Гласные — это «aeiou», поэтому букву «y» не учитывайте.
// Ввод всегда будет строкой.
// При вводе первая буква всегда будет заглавной, а остальные — строчными (например, Сэм).
// Ввод можно изменить

function nicknameGenerator1(name) {
    if (name.length > 3) {
        if ('aeiou'.includes(name[2]) && name[2] !== 'y') {
            return name.substring(0, 4)
        } else {
            return name.substring(0, 3)
        }
    } else {
        return "Error: Name too short"
    }
}
function nicknameGenerator(name) {
    return name.length > 3 ? 'aeiou'.includes(name[2]) && name[2] !== 'y' ? name.substring(0, 4) : name.substring(0, 3) : "Error: Name too short"
}

// console.log(nicknameGenerator("Jimmy"));
// console.log(nicknameGenerator("Jeannie"));
// console.log(nicknameGenerator("Sam"));       // ==> "Error: Name too short");
// console.log(nicknameGenerator("Kayne"));    // ==>  "Kay"
