function getUsersIds(str) {
    return str.toLowerCase().replace(/#/g, '').split(',').map(e => e.trim().replace(/^uid/, "").trim())
}