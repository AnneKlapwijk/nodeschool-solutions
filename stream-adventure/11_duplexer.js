const duplexer2 = require('duplexer2')
const { spawn } = require('child_process')

/**
 * Exports a function that spawns a process from a `cmd`
 * string and an `args` array and returns a single duplex stream joining together
 * the stdin and stdout of the spawned process
 *
 * @param cmd {String}
 * @param args {Array}
 * @return {DuplexWrapper}
 */
module.exports = function (cmd, args) {
  // spawn the process and return a single stream
  const stream = spawn(String(cmd), args)
  // joining together the stdin and stdout here
  return duplexer2(stream.stdin, stream.stdout)
}
