// Завершите метод/функцию, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в верблюжий регистр.
// Первое слово в выводе должно быть написано с заглавной буквы только, если исходное слово было написано с заглавной
// буквы (так называемый верхний верблюжий регистр, также часто называемый регистром Паскаля). Следующие слова всегда
// должны быть написаны с заглавной буквы.

// Примеры
// "the-stealth-warrior"преобразуется в"theStealthWarrior"
// "The_Stealth_Warrior"преобразуется в"TheStealthWarrior"
// "The_Stealth-Warrior"преобразуется в"TheStealthWarrior"

function toCamelCase(str) {
    if (/[_-]/.test(str)) {
        return str[0] === str[0].toUpperCase()
            ? str.split(/[_-]/).map(e => e[0].toUpperCase() + e.slice(1)).join('')
            : str.split(/[_-]/).map((e, i) => i === 0 ? e[0].toLowerCase() + e.slice(1) : e[0].toUpperCase() + e.slice(1)).join('')
    } else {
        return str
    }
}
