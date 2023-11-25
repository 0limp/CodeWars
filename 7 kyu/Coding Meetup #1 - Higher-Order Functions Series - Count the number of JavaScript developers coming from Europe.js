// Вам будет предоставлен массив объектов (хешей в Ruby), представляющих данные о разработчиках, которые подписались на участие в
// встрече по программированию, которую вы организуете впервые. Ваша задача — вернуть количество разработчиков JavaScript из Европы.

function countDevelopers(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i]['continent'] === 'Europe' && list[i]['language'] === 'JavaScript') {
            count++
        }
    }
    return count
}
