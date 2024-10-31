function hasUniqueChars(str) {
    return (![...str].filter((e, i, a) => a.includes(e, i + 1)).length > 0)
}
console.log(hasUniqueChars('  nAa'));