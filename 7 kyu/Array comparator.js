// В этом ката у вас есть два массива, каждый массив содержит только уникальные элементы.
// Ваша задача — посчитать количество элементов первого массива, которые присутствуют и во втором массиве.

function matchArrays1(v, r) {
    let count = 0;
    for (let i = 0; i < v.length; i++) {
        if (r.includes(v[i])) {
            count++
        }
    }
    return count;
}

// short
function matchArrays(v, r) {
    return v.filter(e => r.includes(e)).length
}