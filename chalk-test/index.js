var chalk = require("chalk");

var args = process.argv;



var message = chalk.blue.bold.underline.bgWhite.strikethrough("Hello ") + chalk.yellow("World");
console.log(message);