var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LeaderBoardSchema = new Schema({
    player: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      },
});
var LeaderBoard = mongoose.model("LeaderBoard", LeaderBoardSchema);

module.exports = LeaderBoard;