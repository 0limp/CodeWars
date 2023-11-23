function expandedForm(num) {
    const length = String(num).length;
    const arr = [];
    const mf = () => {
        let m = '1';
        for (let k = 0; k < length - 1; k++) {
            m += '0';
        }
        return Number(m);
    }
    let multiplier = mf();
    while (multiplier >= 1) {
        let digit = Math.floor(num / multiplier);
        if (digit !== 0) {
            arr.push(digit * multiplier);
        }
        num %= multiplier;
        multiplier /= 10;
    }
    return arr.join(' + ');
}