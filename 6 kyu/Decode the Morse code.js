/** 
 *  В этой ката вам предстоит написать простой декодер азбуки Морзе. Хотя азбука Морзе в настоящее время
 *  в основном вытеснена каналами передачи голоса и цифровых данных, она все еще используется в некоторых
 *  приложениях по всему миру.
 *  
 *  Код Морзе кодирует каждый символ как последовательность «точек» и «тире». Например, буква A кодируется как ·−,
 *  буква Q кодируется как −-·-, а цифра 1 кодируется как ·----. В коде Морзе регистр не учитывается, традиционно
 *  используются заглавные буквы. Когда сообщение написано азбукой Морзе, для разделения кодов символов используется
 *  один пробел, а для разделения слов - три пробела. 
 *  
 *  Например, сообщение ЭЙ, ДЖУД на азбуке Морзе: ···· · −·--   ·--- ··- −·· ·.
 *  
 *  ПРИМЕЧАНИЕ. Дополнительные пробелы до или после кода не имеют значения и их следует игнорировать.
 *  
 *  Помимо букв, цифр и некоторых знаков препинания, существуют коды специальных служб, наиболее известным из которых
 *  является международный сигнал бедствия SOS (впервые выпущенный Титаником) который кодируется как ···---···. Эти 
 *  специальные коды рассматриваются как отдельные специальные символы и обычно передаются как отдельные слова.
 *  
 *  Ваша задача - реализовать функцию, которая будет принимать на вход азбуку Морзе и возвращать декодированную, удобочитаемую строку.
 *  
 *  Например:
 *  decodeMorse('.... . -.--   .--- ..- -.. .')         ===>    should return "HEY JUDE"
 *  
 *  ПРИМЕЧАНИЕ. Для кодирования необходимо использовать символы ASCII. и -, а не символы Юникода.
 *  
 *  Таблица азбуки Морзе предварительно загружена для вас в качестве словаря, смело ею пользуйтесь:'
 *  MORSE_CODE['.--']
 */

var MORSE_CODE = {
    '-.-.--': '!', '.-..-.': '"', '...-..-': '$',
    '.-...': '&', '.----.': "'", '-.--.': '(',
    '-.--.-': ')', '.-.-.': '+', '--..--': ',',
    '-....-': '-', '.-.-.-': '.', '-..-.': '/',
    '-----': '0', '.----': '1', '..---': '2',
    '...--': '3', '....-': '4', '.....': '5',
    '-....': '6', '--...': '7', '---..': '8',
    '----.': '9', '---...': ':', '-.-.-.': ';',
    '-...-': '=', '..--..': '?', '.--.-.': '@',
    '.-': 'A', '-...': 'B', '-.-.': 'C',
    '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I',
    '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U',
    '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '..--.-': '_',
    '...---...': 'SOS'
};

decodeMorse = function (morseCode) {
    if (/\s{3}/g.test(morseCode)) {
        return morseCode.trim().split(/\s{3}/).map(word => word.split(/\s/).map(code => MORSE_CODE[code]).join('')).join(' ')
    } else {
        return morseCode.trim().split(/\s/).map(char => MORSE_CODE[char]).join('')
    }
}
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));           // HEY JUDE
// console.log(decodeMorse('...---...'));                              // SOS
// console.log(decodeMorse('   .... . -.--   '));                      // HEY
