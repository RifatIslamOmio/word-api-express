const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api.controller')

router.get('/', apiController.homePageGet)
router.get('/api/words/all', apiController.allWordsGet)
router.get('/api/words/:limit', apiController.noOfWordsGet)
router.post('/api/note', apiController.noteWordPost)

router.get('/api/v2/words/all', apiController.allWordsMongoGet)
router.post('/api/v2/note', apiController.noteWordMongoPost)

module.exports = router