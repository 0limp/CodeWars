// Вы идете на рынок, когда слышите красивую музыку, доносящуюся из уличного артиста, находящегося неподалеку. Ноты складываются так,
// как вы не поверите, когда музыкант собирает образцы мелодий. Когда вы задаетесь вопросом, какой алгоритм вы могли бы использовать
// для сдвига октав на 8 тонов или что-то в этом роде, до вас доходит, что вы наблюдали за музыкантом около 10 с лишним минут.
// Вы спрашиваете: "сколько люди обычно дают чаевые за что-то подобное? Художник поднимает взгляд. "Всегда речь пойдет о деревьях."

// Именно тогда вы понимаете, что музыкант был зверем ростом 400 футов из эпохи палеолита! Лохнесское чудовище чуть не обмануло вас!

// Есть только два гарантированных способа узнать, разговариваете ли вы с Лохнесским чудовищем: А) это зверь высотой 400 футов из эпохи
// палеолита; Б) он попросит у вас елку.

// Поскольку Несси — мастер маскировки, единственный способ точно определить это — найти фразу "tree fiddy". Поскольку вы устали от
// обмана этого монстра, пришло время написать решение для поиска Лохнесского чудовища. Обратите внимание, что фразу также можно
// записать как "3.50" или "three fifty". Ваша функция должна возвращать true, если вы разговариваете с The Loch Ness Moster,
// и false в противном случае.

function isLockNessMonster(s) {
    return /tree fiddy|three fifty|3.50/gi.test(s)
}