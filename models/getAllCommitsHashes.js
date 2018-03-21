const git = require('../helpers/git')
const cut = require('../helpers/cut')

module.exports = async () => {
  let { error, stdout, stderr } = await git('log --oneline')
  ;({ error, stdout, stderr } = await cut(stdout, '1-7'))

  return stdout.trim().split(/\s/)
}
