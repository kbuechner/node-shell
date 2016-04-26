//console.log(Object.keys(process));
/*process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === "pwd"){
  	process.stdout.write(process.env.PWD);
  }
  */

  var commands = require('./commands');

//   var userCommand = 'pwd'
//   var userCommand2 = 'ls'
// // var userCommand = 'date';
// commands[userCommand]();
// commands[userCommand2]();

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  var inputArr = data.toString().split(/\s+/)
  var cmd = inputArr[0]
  var arg = inputArr.slice(1)
  commands[cmd](arg)
})
    // var date = new Date;
  // if (cmd === "date"){
  // 	process.stdout.write(date.toString().trim());
  // }

  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

// var startTime = new Date;

// setTimeout(function () {
//   var endTime = new Date;
//   console.log('Time elapsed: ', endTime - startTime, 'ms');
// }, 500);
// while (new Date - startTime < 1000) {};
// process.stdout.write("\nprompt > ");


//process.stdin.on('pwd', function (data)

//process.env.PWD

