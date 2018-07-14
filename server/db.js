var Sequelize = require('sequelize');

var sequelize = new Sequelize('null', 'null', 'null', {
  dialect: 'sqlite',
  storage: 'test.sqlite'
});

var Song = sequelize.define('song', {
	name: { type: Sequelize.STRING }
});

sequelize.sync().then(function () {
	return Song.create({
		name: 'Some Name'	
	})
}).then(function (song) {
	console.log(song.name)
});


module.exports = {
	Song: Song
}
