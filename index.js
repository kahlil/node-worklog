#! /usr/bin/env node

'use strict';

var async = require('async');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
var dir = path.join(home, 'Dropbox', 'worklog');
var file = path.join(dir, argv._[0] + '.txt');
var time = moment().format('HH:mm:ss');
var data = time + ': ' + argv.m;

module.exports = function worklog() {

  async.series([
    function(callback){

      fs.exists(dir, function (exists) {
        if (!exists) {
          fs.mkdir(dir, function(err) {
            if (err) throw err;
            console.error('Dir "' + dir + '" created...' );
          });
        }

        callback(null, 'one');
      });

    },
    function(callback){

      fs.appendFile(file, data + '\n', function (err) {
        if (err) throw err;
        console.log('The message "' + data + '" was appended to file ' + file + '!');
      });

      callback(null, 'two');
    }
  ]);

};

module.exports();
