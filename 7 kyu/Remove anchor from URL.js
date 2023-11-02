// Завершите функцию/метод так, чтобы она возвращала URL-адрес с чем угодно после удаления привязки (#).
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


function removeUrlAnchor1(url) {
    const array = url.split('')
    const index = array.indexOf('#')
    if (index !== -1) {
        array.splice(index)
    }
    return array.join('')
}

function removeUrlAnchor(url) {
    return url.split('#')[0]
}

//console.log(removeUrlAnchor('www.codewars.com#about'));
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/'));