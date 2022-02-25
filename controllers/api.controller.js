const Validator = require('../utils/utils.validator')
const db = require("../models/db")
const e = require('express')

const home = (req, res) => {
    res.send("<h4>Daily Vocabs API!</h4>")
}

const Word = db.words //model

const add_word = async (req, res) => {
    var reqBody = req.body
    if (!Validator(reqBody)) {
        res.json({ Error: "Validator failed!" })
    }
    else {
        try {
            const word = await Word.create(reqBody)
            res.send(word)
        } catch (error) {
            res.json({
                Error: 'Word already exists!'
            })
        }
    }
}

const getAllWords = async (req, res) => {
    let words = await Word.findAll({})
    res.send(words)
}

const getNoOfWords = async (req, res) => {
    try {
        limit = req.params.limit
        let words = await Word.findAll({
            limit: parseInt(limit),
            order: [['id', 'DESC']]
        })
        res.send(words)
    } catch (error) {
        res.status(404).send({ Error: "Invalid API Param/s!" })
    }
}

module.exports = {
    homePageGet: home,
    noteWordPost: add_word,
    allWordsGet: getAllWords,
    noOfWordsGet: getNoOfWords
}