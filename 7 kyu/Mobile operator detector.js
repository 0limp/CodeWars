// Напишите функцию, которая принимает число и возвращает имя оператора или строку «no info», если оператор не может

function detectOperator(a) {
    const mobileOperators = {
        '039': 'Golden Telecom',
        '050': "MTS",
        '063': "Life:)",
        '066': "MTS",
        '067': "Kyivstar",
        '068': "Beeline",
        '093': "Life:)",
        '096': "Kyivstar",
        '097': "Kyivstar",
        '098': "Kyivstar",
        '099': "MTS"
    }
    const phoneNumber = String(a).match(/^\d{11}$/)
    if (phoneNumber !== null) {
        const phoneCode = phoneNumber[0].substring(1, 4);
        if (mobileOperators.hasOwnProperty(phoneCode)) {
            return mobileOperators[phoneCode]
        } else {
            return "no info"
        }
    } else {
        return "no info"
    }
}
