var async = require('async');
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
var dir = path.join(home, 'Dropbox', 'worklog');
var chalk = require('chalk');


module.exports = function worklog(argv) {
  var message;
  var fileName = argv._[0] + '.txt';
  var fullPath = path.join(dir, fileName);
  var time = argv.t ? argv.t : moment().format('HH:mm:ss');
  var data = time + ' - ' + argv.m;

  async.series([
    function(callback){

      fs.exists(dir, function (exists) {
        if (!exists) {
          fs.mkdir(dir, function(err) {
            if (err) throw err;
            console.info(chalk.green('Dir "' + dir + '" created...'));
          });
        }

        callback(null, 'one');
      });

    },
    function(callback){

      fs.appendFile(fullPath, data + '\n', function (err) {
        if (err) throw err;

        message = chalk.blue('The log message ') +
          chalk.green('"' + data + '"') +
          chalk.blue(' was appended to ' +
          path.join('~','Dropbox', fileName + '!'));

        console.info(message);

        callback(null, 'two');
      });
    }
  ]);

};
