const exec = require('./exec')
const config = require('../config')

module.exports = async (command, args = '') => {
  return await exec(`git -C ${config.REPO_PATH} ${command} ${args}`)
}
