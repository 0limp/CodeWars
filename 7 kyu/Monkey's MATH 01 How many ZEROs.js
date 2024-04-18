function countzero(s) {
    function a() {
        const regex = /[abdegopq069DOPQR]/g
        return s.match(regex) !== null ? s.match(regex).length : 0
    }
    function b() {
        const regex = /[%&B8]/g
        return s.match(regex) !== null ? (s.match(regex).length * 2) : 0
    }
    function c() {
        const regex = /\(\)/g
        return s.match(regex) !== null ? s.match(regex).length : 0
    }
    return a() + b() + c()
}