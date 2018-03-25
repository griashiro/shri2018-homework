const getShellStdOut = require('../helpers/shell').getStdOut
const exec = require('../helpers/shell').exec
const config = require('../config')

module.exports = async () => {
  const stdout = await getShellStdOut(exec(`cat ${config.REPO_PATH}/.git/HEAD`))
  return stdout.trim().split('/').pop()
}
