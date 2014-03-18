var async = require('async');
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
var dir = path.join(home, 'Dropbox', 'worklog');
var chalk = require('chalk');


module.exports = function worklog(argv) {
  var today = moment().format('YYYY-MM-DD');
  var fileName = argv._[0] ? argv._[0] + '.txt' : today + '.txt';
  var fullPath = path.join(dir, fileName);
  var time = argv.t ? argv.t : moment().format('HH:mm:ss');
  var data = time + ' - ' + argv.m;
  var message = chalk.blue('The log message ') +
    chalk.green('"' + data + '"') +
    chalk.blue(' was appended to ' +
    path.join('~','Dropbox', fileName + '!'));

  var checkDir = function(callback){
    fs.exists(dir, function (exists) {
      if (!exists) {
        fs.mkdir(dir, function(err) {
          if (err) throw err;
          console.info(chalk.green('Dir "' + dir + '" created...'));
          callback(null, 'one');
        });
      } else {
        callback(null, 'one');
      }
    });
  };

  var logMessage = function(callback){
    fs.appendFile(fullPath, data + '\n', function (err) {
      if (err) throw err;
      console.info(message);
      callback(null, 'two');
    });
  };

  async.series([checkDir, logMessage]);
};
