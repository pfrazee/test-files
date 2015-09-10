var toPull  = require('stream-to-pull-stream')
var fs      = require('fs')

function ext (type) {
  if (type == 'tif')
    return 'tiff'
  return type
}

function file (type) {
  return __dirname + '/test.' + ext(type)
}

module.exports.has = function (type) {
  try {
    fs.statSync(file(type))
    return true
  } catch (e) {
    return false
  }
}

module.exports.read = function (type) {
  return toPull(fs.createReadStream(file(type)))
}