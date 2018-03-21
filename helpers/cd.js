const exec = require('./exec')
const config = require('../config')

module.exports = async (path = config.REPO_PATH) => {
  return await exec(`cd ${path}`)
}
