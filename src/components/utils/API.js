import axios from 'axios';

export default {
	addScore: function(scoreData) {
		console.log('score API' + scoreData.score);
		return axios.post('/leaderBoard', scoreData);
	},
	getScores: function(req, res) {
		console.log('score API');
		return axios.get('/leaderBoard/scores');
	}
};
