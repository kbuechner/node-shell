
var fs = require('fs');
var path = require('path');

module.exports = {

	pwd: function() {
  		process.stdout.write(process.env.PWD);
  		process.stdout.write('\nprompt > ');
	},
	date: function() {
		var date = new Date;
		process.stdout.write(date.toString().trim());
		process.stdout.write('\nprompt > ');
	},
	ls: function() {
		fs.readdir('.', function(err, files) {
			if (err) throw err;
			files.forEach(function(file) {
				process.stdout.write(file.toString() + "\n");
			})
			process.stdout.write("\nprompt > ");
			});
	},
	echo: function(file) {
  		process.stdout.write(file.join(" "));
  		process.stdout.write('\nprompt > ');
	},
	cat: function(file) {
		var filePath = file[0].toString()
		fs.readFile(filePath, function(err, data) {
//			console.log(Object.keys(data));
			if (err) throw err;
			process.stdout.write(data);
			process.stdout.write("\nprompt > ");
		});
	},
	head: function(file) {
		var filePath = file[0].toString()
		fs.readFile(filePath, function(err, data) {
//			console.log(Object.keys(data));
			if (err) throw err;
			var stringData = data.toString()
			var splitStringData = stringData.split(/\n+/);
			for (var x = 0; x < 10; x++){
				process.stdout.write(splitStringData[x]+"\n");
			}

			process.stdout.write("\nprompt > ");

		})
	},

	tail: function(file) {
		var filePath = file[0].toString()
		fs.readFile(filePath, function(err, data) {
//			console.log(Object.keys(data));
			if (err) throw err;
			var stringData = data.toString()
			var splitStringData = stringData.split(/\n+/);
			var len = splitStringData.length;
			for (var x = 11; x > 1; x--){
				process.stdout.write(splitStringData[len-x]+"\n");
			}

			process.stdout.write("\nprompt > ");

		})
	},	
} //module end bracket






//createReadStream





