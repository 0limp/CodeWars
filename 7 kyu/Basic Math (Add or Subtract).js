function calculate(str) {
    const array = str.split(/(plus|minus)/)
    let result = parseInt(array[0])
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'plus') {
            result = result + parseInt(array[index + 1])
        } else if (array[index] === 'minus') {
            result = result - parseInt(array[index + 1])
        }
    }
    return result + '';
}

// console.log(calculate("1plus2plus3plus4"));
// console.log(calculate('1plus2plus3minus4'));
// console.log(calculate('1minus2minus3minus4'));

