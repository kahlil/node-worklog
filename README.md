# worklog

Log work to files in `~/Dropbox/worklog`.
The name of the file you are logging your work to is determined by the first
argument you pass and the message you log is determined by the message
you pass in the format of `-m <MESSAGE>`.

## TODO:
* check for bad args

## Getting Started
Install the module with: `npm install -g worklog`

And use it like this:

```sh
worklog -m 'What I did today'
```
If the file already exists the message is appended.
The messages are logged to the file `~/Dropbox/worklog/2014-03-17.txt` with
a simple timestamp like this:

```text
11:30:20: did some stuff
14:30:31: totally did more stuffz
16:31:03: hangin'
```

If you want to set the timestamp manually with an argument you can use the
`-t`-flag:

```sh
worklog -m 'What I did today' -t '12:00:00'
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.1.4: Added tests and did some light refactoring.
v0.1.0: Initial release.

## License
Copyright (c) 2014 Kahlil Lechelt. Licensed under the MIT license.
