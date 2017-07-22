const request = require('request')

/**
 Send an HTTP POST request to http://localhost:8099 and pipe process.stdin into
 it. Pipe the response stream to process.stdout.
 */

const r = request.post('http://localhost:8099')

process.stdin
  .pipe(r)
  .pipe(process.stdout)
