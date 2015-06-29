// var exec = require('child_process').exec;
var GitHubApi = require('github');

var github = new GitHubApi({
  version: '3.0.0',
  debug: true
});

var msg = {
  user: 'soyzamudio',
  repo: 'invoice'
}
github.repos.get(msg, function(err, data) {
  console.log(data);
});

// var transifex = function(push, pull) {
//   return push(pull);
// };
//
// var txpush = function(pull) {
//   return exec('tx push -s', function(err, stdout, stderr) {
//     console.log(stdout);
//     if (!err) {
//       return pull();
//     }
//   });
// };
//
// var txpull = function() {
//   return exec('tx pull -a -s -f', function(err, stdout, stderr) {
//     console.log(stdout);
//     if (!err) {
//       return console.log('Finished with Transifex');
//     }
//   });
// };
//
// transifex(txpush, txpull);
