// Завершите функцию/метод так, чтобы она возвращала URL-адрес с чем угодно после удаления привязки (#).
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


function removeUrlAnchor(url) {

}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/'));