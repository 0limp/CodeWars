function myParseInt(str) {
    return Number.isInteger(Number(str.trim())) ? Number(str.match(/\d+/g)) : NaN
}