const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    word_en: {
        type: String,
        unique: true,
        required: true
    },
    word_bn: {
        type: String,
        required: true
    },
    pos: {
        type: String,
        required: true
    },

    source: {
        type: String,
        required: true
    },
    freq: {
        type: String,
        required: true,
        enum: ['high', 'medium', 'low']
    },
    syno: {
        type: String,
        required: true
    },
    sen_en: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = wordSchema;