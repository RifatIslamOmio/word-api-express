const express = require("express");
const router = express.Router();
const wordsController = require("../controllers/words");
const mfaController = require("../controllers/mfas");
const { verifyJWTToken } = require("../middlewares/jwtVerifier");
router.get("/health", wordsController.homePageGet);

//auth routes
router.get("/api/totp/:accountName", mfaController.generateQrCode);
router.post("/api/totp", mfaController.verifyTotp);

//word routes
router.get("/api/words/all", verifyJWTToken, wordsController.allWordsGet);
router.get("/api/words/:limit", wordsController.noOfWordsGet);
router.post("/api/note", wordsController.noteWordPost);
router.get("/api/v2/words/all", verifyJWTToken, wordsController.allWordsMongoGet);
router.post("/api/v2/note", verifyJWTToken, wordsController.noteWordMongoPost);

module.exports = router;
