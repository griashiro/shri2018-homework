const ls = require('../helpers/ls')

module.exports = async () => {
  let { error, stdout, stderr } = await ls()

  return stdout.trim().split(/\s/)
}
