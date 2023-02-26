const Validator = require("../utils/utils.validator");


test("Input Validator Test 1", () => {
    var data = {
        word_en: "abduct", word_bn: "অপহরণ",
        pos: "verb", source: "barron 333",
        freq: "true", syno: "kidnap, carry off, seize, capture",
        sen_en: "He was abducted by robbers"
    }
    expect(Validator(data)).toBeTruthy()
})


test("Input Validator Test 2", () => {
    var data = {
        word_en: "abduct2", word_bn: "অপহরণ",
        pos: "verb", source: "barron 333",
        freq: "true", syno: "kidnap, carry off, seize, capture",
        sen_en: "He was abducted by robbers"
    }
    expect(Validator(data)).toBeFalsy()
})

test("Input Validator Test 3", () => {
    var data = {
        word_en: "abduct",
        pos: "verb", source: "barron 333",
        freq: "true", syno: "kidnap, carry off, seize, capture",
        sen_en: "He was abducted by robbers"
    }
    expect(Validator(data)).toBeFalsy() //missing property
})