const crypto = require('crypto')
const tar = require('tar')
const zlib = require('zlib')
const concat = require('concat-stream')

const cipherName = process.argv[2]
const cipherPass = process.argv[3]

const decipher = crypto.createDecipher(cipherName, cipherPass)

/**
 * For each file in the tar input (process.stdin), print a hex-encoded md5 hash of the
 * file contents followed by a single space followed by the filename, then a newline
 */

const parser = new tar.Parse()

parser.on('entry', function (e) {
  // generate a stream that outputs a hex md5 hash for the content written to it
  const hash = crypto.createHash('md5', { encoding: 'hex' })
  // collect all the file data in a single buffer
  e.pipe(concat(function (data) {
    if (e.type !== 'File') return
    hash.update(data.toString())
    console.log(`${hash.digest('hex')} ${e.path}`)
  }))
})

process.stdin
  .pipe(decipher)
  .pipe(zlib.createGunzip())
  .pipe(parser)
