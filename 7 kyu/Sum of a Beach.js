// Пляжи наполнены песком, водой, рыбой и солнцем. Учитывая строку, подсчитайте, сколько раз встречаются слова "Sand", "Water",
// "Fish" и "Sun". появляются без перекрытия (независимо от регистра).

// Примеры
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4
// sumOfABeach("cItYTowNcARShoW")               ==>  0

function sumOfABeach(beach) {
    const match = beach.match(/sand|water|fish|sun/gi)
    return match ? match.length : 0
}
