/**
 * Реализуй функцию createTemplate, которая принимает строку с тегами, обернутыми в двойные фигурные
 * скобки {{...}}, и возвращает замыкание — то есть функцию, которая может заполнить эту строку данными
 * из объекта.
 *
 * Пример:
 * let personTmpl = createTemplate("{{name}} likes {{animalType}}");
 * personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs
 *
 * Если в переданном объекте нет ключа, соответствующего тегу, то вместо него нужно подставить пустую строку.
 */
function createTemplate(template) {
  return (options) =>
    template.replace(/{{(.*?)}}/g, (match, pocket) =>
      options[pocket] ? options[pocket] : ""
    );
}

const personTmpl = createTemplate("{{name}} likes {{animalType}}");
const result = personTmpl({ name: "Albert Einstein", animalType: "dogs" });
