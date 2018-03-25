const urlencode = require('urlencode')

module.exports = (path = '') => {
  path = urlencode.decode(path) || ''

  if (path[0] === '/') {
    path = '.' + path
  }

  return path
}
