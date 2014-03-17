var async = require('async');
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
var dir = path.join(home, 'Dropbox', 'worklog');


module.exports = function worklog(argv) {

  var file = path.join(dir, argv._[0] + '.txt');
  var time = argv.t ? argv.t : moment().format('HH:mm:ss');
  var data = time + ' - ' + argv.m;

  async.series([
    function(callback){

      fs.exists(dir, function (exists) {
        if (!exists) {
          fs.mkdir(dir, function(err) {
            if (err) throw err;
            console.info('Dir "' + dir + '" created...' );
          });
        }

        callback(null, 'one');
      });

    },
    function(callback){

      fs.appendFile(file, data + '\n', function (err) {
        if (err) throw err;
        console.info('The message "' + data + '" was appended to file ' + file + '!');
        callback(null, 'two');
      });
    }
  ]);

};
