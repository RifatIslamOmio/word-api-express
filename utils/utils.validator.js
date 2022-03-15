const Validator = (object) => {
    const KEYS = [
        "word_en",
        "pos", "word_bn",
        "source", "freq",
        "syno", "sen_en"
    ]

    var reg_en = /^[A-Za-z ,]+$/
    var reg_b = /^[A-Za-z0-9]+$/    //improvised

    for (let key of KEYS) {
        if (!Object.keys(object).includes(key)) { return false }
    }

    for (let data in object) {
        if (object[data].trim() === undefined || object[data].trim() === '' || object[data].trim() === null) { return false; }
    }

    for (let key in object) {
        if (key != 'word_bn' && key != 'source') {
            if (!reg_en.test(object[key].trim())) return false
        }
        else if (key == 'word_bn') {
            if (reg_b.test(object[key].trim())) return false
        }
    }
    return true;
}

module.exports = Validator

// var obj = {
//     "word_en": "abduct",
//     "word_bn": "অপহরণ",
//     "pos": "verb",
//     "source": "barron 333",
//     "freq": "true",
//     "syno": "kidnap, carry off, seize, capture",
//     "sen_en": "He was abducted by robbers"
// }

// console.log(Validator(obj))



