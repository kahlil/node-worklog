var async = require('async');
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
var chalk = require('chalk');
var linefeed = require('os').EOL;

module.exports = function worklog(argv) {
  var today = moment().format('YYYY-MM-DD');
  var fileName = argv._[0] ? argv._[0] + '.txt' : today + '.txt';
  var storageDir = argv.d ? argv.d : 'Dropbox';
  var dir = path.join(home, storageDir, 'worklog');
  var fullPath = path.join(dir, fileName);
  var time = argv.t ? argv.t : moment().format('HH:mm:ss');
  var data = time + ' - ' + argv.m;
  var message = linefeed + chalk.blue('The work log message ') +
    chalk.green('"' + data + '"') + linefeed +
    chalk.blue('was appended to ') +
    chalk.magenta(fullPath);

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
    fs.appendFile(fullPath, data + linefeed, function (err) {
      if (err) throw err;
      console.info(message);
      callback(null, 'two');
    });
  };

  async.series([checkDir, logMessage]);
};
