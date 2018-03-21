const exec = require('./exec')
const config = require('../config')

module.exports = async (flags = '-F', path = '') => {
  return await exec(`ls ${flags} ${config.REPO_PATH}${path}`)
}
