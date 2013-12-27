var allStar = require('./index'),
	user = require('./data.ranking').data,
	_ = require('lodash');

var shuffled = _.shuffle(user);
var sorted = allStar.getAllRanking(shuffled);

console.log(shuffled);
console.log(sorted);



