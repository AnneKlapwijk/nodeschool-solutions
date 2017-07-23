const crypto = require('crypto')

const passphrase = process.argv[2]

process.stdin
  .pipe(crypto.createDecipher('aes256', passphrase))
  .pipe(process.stdout)
