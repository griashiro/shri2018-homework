const exec = require('./exec')
const config = require('../config')

module.exports = async (command, args = '') => {
  return await exec(`GIT_DIR=${config.REPO_PATH}/.git git ${command} ${args}`)
}
