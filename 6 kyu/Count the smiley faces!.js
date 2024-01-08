// Каждый смайлик должен содержать действительную пару глаз. Глаза могут быть отмечены как : или ;
// У смайлика может быть нос, но это не обязательно. Допустимые символы для носа: - или .~
// У каждого улыбающегося лица должен быть улыбающийся рот, который должен быть помечен либо ), либо D


function countSmileys(arr) {
    let count = 0
    const regex = /[:;][~-]?[)D]/
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(regex)) {              // regex.test(arr[i])
            count++
        }
    }
    return count
}

// short
function countSmileysXX(arr) {
    return arr.filter(e => e.match(/[:;][~-]?[)D]/)).length
}

