function isValidHKPhoneNumber(str) {
    return /^\d{4}\s\d{4}$/.test(str)
}

function hasValidHKPhoneNumber(str) {
    return /^\d{4}\s\d{4}$/.test(str.match(/\d{4}\s\d{4}/))
}
