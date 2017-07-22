const ws = require('websocket-stream')

/**
 Write some browser code that uses the websocket-stream module
 to print the string "hello\n"
 */

const stream = ws('ws://localhost:8099')

stream.write('hello\n')
