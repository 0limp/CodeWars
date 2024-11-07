function solution(str, ending) {
    return ending === '' || [...str].slice(-ending.length).join('') === ending
}
