function isValid(idn) {
    return /^[a-z_$]{1}[a-z0-9_$]*$/gi.test(idn)
}
