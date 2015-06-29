var exec = require('child_process').exec;
// var GitHubApi = require('github');
//
// var github = new GitHubApi({
//   version: '3.0.0',
//   debug: true
// });
//
// var msg = {
//   user: 'soyzamudio',
//   repo: 'invoice'
// }
// github.repos.get(msg, function(err, data) {
//   console.log(data);
// });

var createCommit = function() {
  return exec('git add . && git commit -m "Testing commit from node.js" && git push origin master', function(err, stdout, stderr) {
    var sha = stdout.split(' ')[1];
    sha = sha.split('');
    sha.pop()
    console.log(sha.join(''));
    // console.log(stdout);
  });
}

createCommit()

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
