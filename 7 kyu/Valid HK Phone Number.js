function isValidHKPhoneNumber(str) {
    return /^\d{4}\s\d{4}$/.test(str)
}

function hasValidHKPhoneNumber(str) {
    return /\d{4}\s\d{4}/.test(str.match(/\d{4} \d{4}/))
}

console.log(isValidHKPhoneNumber("1234 5678"));
console.log(isValidHKPhoneNumber("1234 5678"));

console.log(isValidHKPhoneNumber("85748475"));
console.log(isValidHKPhoneNumber("3857  4756"));
console.log(isValidHKPhoneNumber("sklfjsdklfjsf"));
console.log(isValidHKPhoneNumber("     1234 5678   "));


console.log(hasValidHKPhoneNumber("Hello, my phone number is 1234 5678"));