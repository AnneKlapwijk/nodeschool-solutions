const fs = require('fs')
const path = require('path')

/**
 * Calls the callback with an array of files filtered by extension
 * @param folder
 * @param extension
 * @param callback
 */
module.exports = function(folder, extension, callback) {
  return fs.readdir(folder, (err, list) => {
    if (err)
      return callback(err) // early return

    // ... no error, continue doing cool things with `data`

    // all went well, call callback with `null` for the error argument

    callback(null, list.filter(file => path.extname(file) === `.${extension}`))
  })
}
