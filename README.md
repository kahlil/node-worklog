# worklog

[![Greenkeeper badge](https://badges.greenkeeper.io/kahlil/node-worklog.svg)](https://greenkeeper.io/)

A tiny Node program that lets you log work to files in `~/Dropbox/worklog` via the terminal.

```sh
worklog [<custom filename>] -m <a message to be logged> [-t <a custom timestamp>]
```

Per default the filename of the file the message is logged to is the current date in the following format: `YYYY-MM-DD.txt`.
To use a custom filename pass the name as the first parameter.

Per default the message logged is prefixed with a timestamp. If you want to customize the timestamp pass your timestamp of choice with the `-t` flag.

Per default worklogs are stored in `Dropbox` folder. With a `-d` flag it is possible to specify an alternative directory:

```sh
worklog -m 'some stuff I did today' -d 'Google Drive'
```

Add this alias to avoid typing `-d` flag every time:

```sh
alias worklog='worklog -d "Google Drive" '
```

## Getting Started
Install the module with: `npm install -g worklog`

Mostly you would use it like this:

```sh
worklog -m 'some stuff I did today'
```

If the file already exists the message is appended.
The contents of a worklog file could look like this:

```text
11:30:20 - did some stuff
14:30:31 - totally did more stuffz
16:31:03 - hangin'
```

## Fancy Badge

<a href="https://nodei.co/npm/worklog/"><img src="https://nodei.co/npm/worklog.png"></a>

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* v0.1.6: Small changes.
* v0.1.4: Added tests and did some light refactoring.
* v0.1.0: Initial release.

## License
Copyright (c) 2014 Kahlil Lechelt. Licensed under the MIT license.
