const exec = require('./exec')

module.exports = async (text, list = '1-') => {
  return await exec(`echo "${text}" | cut -c ${list}`)
}
