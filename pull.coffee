exec = require('child_process').exec

transifex = (push, pull) ->
  push(pull)

txpush = (pull) ->
  exec 'tx push -s', (err, stdout, stderr) ->
    console.log stdout
    if !err then pull()

txpull = () ->
  exec 'tx pull -a -s -f', (err, stdout, stderr) ->
    console.log stdout
    if !err then console.log 'Finished with Transifex'

transifex txpush, txpull
