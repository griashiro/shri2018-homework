const exec = require('../shell').exec
const config = require('../../config')

module.exports = (command, args = '') => {
  return exec(`GIT_DIR=${config.REPO_PATH}/.git git ${command} ${args}`)
}
