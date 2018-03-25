const path = require('path')

module.exports = {
  PORT: process.env.PORT || 8080,
  REPO_PATH: path.join(__dirname, '/data')
}
