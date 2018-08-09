const express = require('express')
const router = express.Router()
// const User = require('../../database/models/User')
// const passport = require('../../passport')
const scoreController = require("./../../controllers/scoreController");

router.route("/").post(
    // console.log("message.js!!")
    scoreController.addScore
)
router.route('/scores').get(
    scoreController.getScores
)
// router.route("/delete/:username/:id").delete(userController.deleteMessage)
module.exports = router