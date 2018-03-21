const git = require('../helpers/git')
const cut = require('../helpers/cut')

module.exports = async () => {
  let { error, stdout, stderr } = await git('branch')
  ;({ error, stdout, stderr } = await cut(stdout, '3-'))

  return stdout.trim().split(/\s/)
}
