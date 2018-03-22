const git = require('../helpers/git')
const cut = require('../helpers/cut')
const parseBranches = require('../helpers/parse-branches')

module.exports = async () => {
  let { error, stdout, stderr } = await git('branch --all')
  ;({ error, stdout, stderr } = await cut(stdout, '3-'))

  return parseBranches(stdout)
}
