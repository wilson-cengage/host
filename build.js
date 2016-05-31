/* eslint no-var: 0 */
var exec = require('child_process').exec;

var cmdLine = './node_modules/.bin/webpack --progress';
var environ = (!process.argv[2].indexOf('development')) ? 'development' : 'production';
var command;

var packageName = 'none';
if (process.argv[3]) {
  packageName = process.argv[3];
}

if (process.platform === 'win32') {
  cmdLine = 'set NODE_ENV=' + environ + '&& ' + cmdLine;
  cmdLine = 'set PACKAGE_NAME=' + packageName + '&& ' + cmdLine;
} else {
  cmdLine = 'NODE_ENV=' + environ + ' ' + cmdLine;
  cmdLine = 'PACKAGE_NAME=' + packageName + ' ' + cmdLine;
}

command = exec(cmdLine);

command.stdout.on('data', function(data) {
  process.stdout.write(data);
});
command.stderr.on('data', function(data) {
  process.stderr.write(data);
});
command.on('error', function(err) {
  process.stderr.write(err);
});
