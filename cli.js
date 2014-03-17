#! /usr/bin/env node

var worklog = require('./');
var argv = require('minimist')(process.argv.slice(2));

worklog(argv);
