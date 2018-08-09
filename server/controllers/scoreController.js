const db = require("../database/models");
var mongoose = require("mongoose");
module.exports = {
  addScore: function(req, res) {
      console.log('here controller')
    db.LeaderBoard.create(req.body)
      .then(function(dbScore) {
        res.json(dbScore);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  getScores: function(req, res) {
    console.log('here controller')
    db.LeaderBoard.find({}).sort({score: -1})
      .then(function(dbScores) {
          res.json(dbScores)
      })
  }
}